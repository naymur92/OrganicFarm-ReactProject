import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { API_PATH } from '../../API_PATH';
import useSessionStorage from '../../hooks/useSessionStorage';
import './ViewProduct.css';

function ViewProduct() {
  const [products, cartItems, onAdd, onRemove, onEmpty] = useOutletContext();
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);

  const params = useParams();
  const navigate = useNavigate();

  // const product = products.filter((x) => x.id === params.id)[0];

  const [product, setProduct] = useState([]);

  const singleProd = async (id) => {
    await axios
      .get(`${API_PATH}/products/get_product.php`, {
        params: { id },
      })
      .then((res) => {
        if (res.data.success) {
          setProduct(res.data.product);
          // console.log(res.data);
        } else {
          navigate('/shop');
        }
      });
  };

  useEffect(() => {
    document.getElementsByClassName('shop-single')[0].scrollIntoView();
    singleProd(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <!-- Page Header Section Start Here --> */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay" />
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">{product.name}</h4>
            <ul className="agri-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a className="active">Single Product</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Page Header Section Ending Here --> */}

      {/* <!-- Shop Page Section start here --> */}
      <section className="shop-single padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 sticky-widget">
              <div className="product-details">
                <div className="row align-items-center">
                  <div className="col-md-6 col-12">
                    <div className="product-thumb">
                      <div className="swiper-container gallery-top">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="shop-item">
                              <div className="shop-thumb">
                                <img
                                  src={`/assets/images/product/${product.thumbnail}`}
                                  alt="shop-single"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="post-content">
                      <h4>{product.name}</h4>
                      {/* <p className="rating">
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        (3 review)
                      </p> */}
                      <h4>Tk. {product.price}</h4>
                      <h5>Product Description:</h5>
                      <p>{product.description}</p>

                      {product.stock < 20 && Number(product.stock) !== 0 ? (
                        <p className="my-2 alert alert-warning">Stock is running low!!</p>
                      ) : null}

                      {cartItems.map((item) =>
                        item.id === product.id ? (
                          <div className="cart-plus-minus">
                            <div
                              role="button"
                              onClick={() => onRemove(product)}
                              className="dec qtybutton"
                            >
                              -
                            </div>
                            <input
                              className="cart-plus-minus-box"
                              type="text"
                              name="qtybutton"
                              value={item.qty}
                            />
                            <div
                              role="button"
                              onClick={() => onAdd(product)}
                              className="inc qtybutton"
                            >
                              +
                            </div>
                            <br />
                          </div>
                        ) : null
                      )}
                      {(loginInfo?.role !== 'admin' || loginInfo?.role !== 'manager') &&
                      product.status === 'available' ? (
                        <button
                          onClick={() => onAdd(product)}
                          type="button"
                          className="btn btn-success"
                        >
                          Add To Cart
                        </button>
                      ) : (
                        <div className="alert alert-danger text-center disabled">
                          <strong>Not Available Right Now!</strong>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="review">
                <div className="review-content review-content-show">
                  <div className="review-showing">
                    <div className="client-review">
                      <div className="review-form">
                        <div className="review-title">
                          <h5>Add a Review</h5>
                        </div>
                        <form action="action" className="row">
                          <div className="col-md-4 col-12">
                            <input type="text" name="name" placeholder="Full Name" />
                          </div>
                          <div className="col-md-4 col-12">
                            <input type="text" name="email" placeholder="Email Adress" />
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="rating">
                              <span className="rating-title">Your Rating : </span>
                              <div className="rating">
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-12">
                            <textarea rows="8" placeholder="Type Here Message" />
                          </div>
                          <div className="col-12">
                            <button className="defult-btn" type="submit">
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shop Page Section ending here --> */}

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
                <form className="d-flex flex-wrap">
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

export default ViewProduct;
