import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Search from './Components/Search';

function FrontTemplate() {
  const [products, setProducts] = useState([]);

  // Get all products
  const allProducts = async () => {
    await axios
      .get(`http://localhost/wdpf51_React/organicfarm/api/products/products.php`)
      .then((res) => {
        // console.log(res.data.products);
        setProducts(res.data.products);
      });
  };

  const [cartItems, setCartItems] = useState([]);

  // Method for adding items into cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    // console.log(cartItems);
  };

  // Method for reducing items
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
      );
    }
  };

  // Method for removing items
  const onEmpty = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  // Calculate shipping Charge
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const [shippingCharge, setShippingCharge] = useState(150);
  const updateShippingCharge = (price) => {
    setShippingCharge(price);
  };

  // Calculate total price
  const totalPrice = shippingCharge + itemsPrice;

  useEffect(() => {
    allProducts();
    if (itemsPrice >= 2000) {
      setShippingCharge(0);
    } else {
      setShippingCharge(150);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPrice]);

  return (
    <>
      {/* <!-- preloader start here --> */}
      {/* <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span />
            <span />
          </div>
        </div>
      </div> */}
      {/* <!-- preloader ending here --> */}
      <Search />
      <Header
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onEmpty={onEmpty}
        itemsPrice={itemsPrice}
      />
      <Outlet
        context={[
          products,
          cartItems,
          onAdd,
          onRemove,
          onEmpty,
          itemsPrice,
          totalPrice,
          shippingCharge,
          updateShippingCharge,
        ]}
      />
      <Footer />
    </>
  );
}

export default FrontTemplate;
