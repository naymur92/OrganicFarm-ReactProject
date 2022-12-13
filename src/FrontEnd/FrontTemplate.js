import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import useSessionStorage from '../hooks/useSessionStorage';
import Footer from './Components/Footer';
import Header from './Components/Header';

import Search from './Components/Search';

function FrontTemplate() {
  const [products, setProducts] = useLocalStorage('products', []);
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);

  // Get all products
  const allProducts = async () => {
    await axios
      .get(`http://localhost/wdpf51_React/organicfarm/api/products/products.php`)
      .then((res) => {
        // console.log(res.data.products);
        setProducts(res.data.products);
      });
  };

  const [cartItems, setCartItems] = useLocalStorage('cart-items', []);

  // Method for adding items into cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      // set limit for single item
      if (exist.qty < 5) {
        // main method
        setCartItems(
          cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
        );
      } else {
        alert('Maximum order quantity is 5!');
      }
    } else {
      // Check cart length
      // eslint-disable-next-line no-lonely-if
      if (cartItems.length < 5) {
        // main method
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      } else {
        alert('Maximum cart items is 5!');
      }
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

    if (cartItems.length === 0) {
      localStorage.removeItem('pendingcheckout');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPrice, cartItems]);

  return (
    <>
      <Search />
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onEmpty={onEmpty}
        itemsPrice={itemsPrice}
        loginInfo={loginInfo}
        setLoginInfo={setLoginInfo}
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
          setCartItems,
          loginInfo,
          setLoginInfo,
        ]}
      />
      <Footer />
    </>
  );
}

export default FrontTemplate;
