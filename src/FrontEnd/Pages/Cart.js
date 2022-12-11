import React, { useEffect } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [products, cartItems, onAdd, onRemove, onEmpty] = useOutletContext();

  if (cartItems.length === 0) {
    navigate('/shop');
  }

  useEffect(() => {
    window.scrollTo(0, 450);
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
                      <td>Tk. {item.price}</td>
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
                      <td>Tk. {item.qty * item.price}</td>
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
                <form action="/" className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <input type="submit" value="Proceed to Checkout" />
                </form>
              </div>
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h4>Calculate Shipping</h4>
                      <div className="outline-select">
                        <select>
                          <option value="bangladesh" selected>
                            Bangladesh
                          </option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-caret-down" />
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="" selected disabled>
                            State/Country
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
                        name="coupon"
                        placeholder="Postcode/ZIP"
                        className="cart-page-input-text"
                      />
                      <button type="submit" className="lab-btn">
                        <span>Update Total</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h4>Cart Totals</h4>
                      <ul>
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ 0.00</p>
                        </li>
                        <li>
                          <span className="pull-left">Shipping and Handling</span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">$ 2940.00</p>
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
      <div className="newsletter-section">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <div className="newsletter-title">
                <h4>Subscribe Our Newsletter</h4>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="newsletter-form">
                <form action="/" className="d-flex flex-wrap">
                  <input type="text" placeholder="Enter Your Email" className="input-email" />
                  <input type="submit" value="Subscribe" className="subscribe-btn" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- newsletters section ending here --> */}
    </>
  );
}

export default Cart;
