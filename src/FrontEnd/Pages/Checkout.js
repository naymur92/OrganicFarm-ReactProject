import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import useSessionStorage from '../../hooks/useSessionStorage';
import Newsletter from '../Components/Newsletter';

function Checkout() {
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
    clearCartItems,
  ] = useOutletContext();

  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);
  const [pendingCheckout, setPendingCheckout] = useLocalStorage('pendingcheckout', []);

  // console.log(loginInfo);
  const authenticate = () => {
    if (!loginInfo?.id) {
      navigate('/login');
    } else if (loginInfo?.role === 'admin' || loginInfo?.role === 'manager') {
      navigate('/admin');
    }
  };

  const updateShipping = (e) => {
    if (itemsPrice < 2000) {
      if (e.target.value === 'dhaka') {
        updateShippingCharge(50);
      } else if (e.target.value === 'others') {
        updateShippingCharge(150);
      }
    }
    // console.log(shippingCharge);
  };

  useEffect(() => {
    document.getElementsByClassName('checkout')[0].scrollIntoView();
    if (cartItems.length === 0) {
      navigate('/shop');
    }
    setPendingCheckout({ status: 'pending' });
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo]);

  // Handle Shipping Charge
  const [shipping, setShipping] = useState({
    area: '',
    zipcode: '',
    address: '',
    phone: '',
  });

  const onChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    // console.log(shipping);
    // console.log(cartItems);
    // localStorage.removeItem('pendingcheckout');
    await axios
      .post('http://localhost/wdpf51_React/organicfarm/api/orders/new_order.php', {
        userid: loginInfo.id,
        products: cartItems,
        subtotal: totalPrice,
        shipping: shippingCharge,
        total: totalPrice + shippingCharge,
        address: shipping,
        payment: { method: document.getElementById('pmt_method').value },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          // cartItems
          //   .map((item) => onRemove(item))
          //   .then(() => {
          //     navigate('/');
          //   });
          localStorage.removeItem('pendingcheckout');
          // navigate('/');
          // if (clearCartItems()) {
          // }
        }
        alert(res.data.msg);
      });
  };

  return (
    <>
      {/* <!-- Page Header Section Start Here --> */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay" />
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">OrganicFarm Checkout</h4>
            <ul className="agri-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link className="active">Checkout</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Page Header Section Ending Here --> */}

      {/* <!-- Checkout Page Section start here --> */}
      <div className="checkout shop-cart padding-tb">
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
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="product-item">
                        <div className="p-content">
                          <Link to={`/shop/view-product/${item.id}`}>{item.name}</Link>
                        </div>
                      </td>
                      <td>Tk. {Number(item.price).toFixed(2)}</td>
                      <td className="text-center">{item.qty}</td>
                      <td>Tk. {Number(item.qty * item.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-bottom">
              <div className="shiping-box">
                <form className="calculate-shiping" onSubmit={handleCheckout}>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <h4>Set Delivery Location</h4>
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
                        <select
                          name="area"
                          onChange={(event) => {
                            onChange(event);
                            updateShipping(event);
                          }}
                        >
                          <option value="" selected disabled>
                            Select Area
                          </option>
                          <option value="dhaka">Dhaka</option>
                          <option value="others">Outside Dhaka</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-caret-down" />
                        </span>
                      </div>
                      <input
                        type="text"
                        name="zipcode"
                        onChange={onChange}
                        placeholder="Postcode/ZIP"
                        className="cart-page-input-text"
                      />

                      <textarea
                        name="address"
                        onChange={onChange}
                        placeholder="Enter Address"
                        className="form-control"
                        style={{
                          border: '1px solid #f0f0f0',
                          borderRadius: '0',
                          padding: '10px 20px',
                        }}
                        required
                      />
                      <input
                        type="text"
                        name="phone"
                        onChange={onChange}
                        placeholder="Enter Phone Number"
                        className="form-control my-3"
                        style={{
                          border: '1px solid #f0f0f0',
                          borderRadius: '0',
                          padding: '10px 20px',
                        }}
                        required
                      />
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
                      <div className="row">
                        <div className="col-6 form-group mt-2">
                          <label htmlFor="pmt_method">
                            <strong>Payment Method:</strong>
                          </label>
                          <select name="pmtmethod" id="pmt_method" className="form-control">
                            <option value="cashondelivery" selected>
                              CashOnDelivery
                            </option>
                          </select>
                        </div>
                        <div className="col-6">
                          <button type="submit" className="lab-btn mt-5">
                            <span>Confirm Booking</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Checkout Page Section ending here --> */}

      {/* <!-- newsletters section start here --> */}
      <Newsletter />
      {/* <!-- newsletters section ending here --> */}
    </>
  );
}

export default Checkout;
