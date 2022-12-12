import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import useSessionStorage from '../../hooks/useSessionStorage';
import Newsletter from '../Components/Newsletter';

function Checkout() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);
  // console.log(loginInfo);
  const authenticate = () => {
    if (!loginInfo?.id) {
      navigate('/login');
    } else if (loginInfo?.role === 'admin' || loginInfo?.role === 'manager') {
      navigate('/admin');
    }
  };

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

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log(shipping);
  };

  useEffect(() => {
    document.getElementsByClassName('checkout')[0].scrollIntoView();
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo]);

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
                      <button type="submit" className="lab-btn mt-5">
                        <span>Confirm Booking</span>
                      </button>
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
