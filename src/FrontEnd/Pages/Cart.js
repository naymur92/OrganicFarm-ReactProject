import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import Newsletter from '../Components/Newsletter';

function Cart() {
  const navigate = useNavigate();
  const [
    products,
    cartItems,
    onAdd,
    onRemove,
    onEmpty,
    itemsPrice,
    totalPrice,
    shippingCharge,
    updateShippingCharge,
  ] = useOutletContext();

  if (cartItems.length === 0) {
    navigate('/shop');
  }

  const handleCheckout = (e) => {
    e.preventDefault();
  };

  // Handle Shipping Charge
  const [shipping, setShipping] = useState({
    area: '',
    zipcode: '',
  });
  const onShippingChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };
  const calculateShipping = (e) => {
    e.preventDefault();

    if (itemsPrice < 2000) {
      if (shipping.area === 'dhaka') {
        updateShippingCharge(50);
      } else if (shipping.area === 'outside') {
        updateShippingCharge(150);
      }
    }
    // console.log(shippingCharge);
  };

  useEffect(() => {
    document.getElementsByClassName('shop-cart')[0].scrollIntoView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <!-- Page Header Section Start Here --> */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay" />
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">Organic Farm Cart Page</h4>
            <ul className="agri-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link className="active">Cart Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Page Header Section Ending Here --> */}

      {/* <!-- Shop Cart Page Section start here --> */}
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="product-item">
                        <div className="p-thumb">
                          <Link to={`/shop/view-product/${item.id}`}>
                            <img src={`assets/images/product/${item.thumbnail}`} alt="product" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to={`/shop/view-product/${item.id}`}>{item.name}</Link>
                        </div>
                      </td>
                      <td>Tk. {Number(item.price).toFixed(2)}</td>
                      <td>
                        <div className="cart-plus-minus">
                          <div
                            role="button"
                            onClick={() => onRemove(item)}
                            className="dec qtybutton"
                          >
                            -
                          </div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value={`${item.qty}`}
                          />
                          <div role="button" onClick={() => onAdd(item)} className="inc qtybutton">
                            +
                          </div>
                        </div>
                      </td>
                      <td>Tk. {Number(item.qty * item.price).toFixed(2)}</td>
                      <td>
                        <Link role="button" onClick={() => onEmpty(item)}>
                          <img src="assets/images/del.png" alt="product" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form action="/" className="coupon">
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code..."
                    className="cart-page-input-text"
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout" onSubmit={handleCheckout}>
                  <input type="submit" value="Update Cart" onClick={() => navigate('/shop')} />
                  <input
                    type="submit"
                    value="Proceed to Checkout"
                    onClick={() => navigate('/checkout')}
                  />
                </form>
              </div>
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <form className="calculate-shiping" onSubmit={calculateShipping}>
                      <h4>Calculate Shipping</h4>
                      <div className="outline-select">
                        <select name="country">
                          <option value="bangladesh" selected>
                            Bangladesh
                          </option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-caret-down" />
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select name="area" onChange={onShippingChange}>
                          <option value="" selected disabled>
                            Select Area
                          </option>
                          <option value="dhaka">Dhaka</option>
                          <option value="outside">Outside Dhaka</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-caret-down" />
                        </span>
                      </div>
                      <input
                        type="text"
                        name="zipcode"
                        onChange={onShippingChange}
                        placeholder="Postcode/ZIP"
                        className="cart-page-input-text"
                      />
                      <button type="submit" className="lab-btn">
                        <span>Update Total</span>
                      </button>
                    </form>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h4>Cart Totals</h4>
                      <ul>
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">Tk. {itemsPrice.toFixed(2)}</p>
                        </li>
                        <li>
                          <span className="pull-left">Shipping and Handling</span>
                          <p className="pull-right">
                            {shippingCharge === 0
                              ? `Free Shipping`
                              : `Tk. ${shippingCharge.toFixed(2)}`}
                          </p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">Tk. {totalPrice.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Shop Cart Page Section ending here --> */}

      {/* <!-- newsletters section start here --> */}
      <Newsletter />
      {/* <!-- newsletters section ending here --> */}
    </>
  );
}

export default Cart;
