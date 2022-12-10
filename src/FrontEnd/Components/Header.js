import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const loginInfo = JSON.parse(sessionStorage.getItem('logininfo'));

  const logOut = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <header className="header-section">
      <div className="header-top bg-black d-none d-lg-block">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-7 col-12">
              <div className="ht-left">
                <ul className="agri-ul d-flex flex-wrap">
                  <li>
                    <i className="icofont-envelope" />
                    <span>organicfruit@gmail.com</span>
                  </li>
                  <li>
                    <i className="icofont-phone" />
                    <span>+880-1737-036324</span>
                  </li>
                  <li>
                    <i className="icofont-stopwatch" />
                    <span>Sat - Thu 09:00 - 20:00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="ht-right">
                <div className="scocial-media">
                  <a href="#" className="facebook">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="#" className="twitter">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="icofont-linkedin" />
                  </a>
                  <a href="#" className="vimeo">
                    <i className="icofont-vimeo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-area">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="primary-menu">
              <div className="logo d-lg-none">
                <Link to="/">
                  <img src="assets/images/logo/01.png" alt="logo" />
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="icofont-navigation-menu" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="main-area">
                  <div className="main-menu  d-flex flex-wrap align-items-center justify-content-center w-100">
                    <ul className="agri-ul">
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="about">About</NavLink>
                      </li>
                    </ul>
                    <div className="logo px-4 d-none d-lg-block">
                      <Link to="/">
                        <img src="assets/images/logo/01.png" alt="logo" />
                      </Link>
                    </div>
                    <ul className="agri-ul">
                      <li>
                        <NavLink to="shop">Shop</NavLink>
                      </li>
                      <li>
                        <NavLink to="contact">Contact</NavLink>
                      </li>
                    </ul>
                    <ul className="agri-ul search-cart">
                      <li>
                        <div className="cart-option">
                          <i className="fas fa-cart-arrow-down" />
                          <div className="cart-content">
                            <div className="cart-item">
                              <div className="cart-img">
                                <a href="#">
                                  <img src="assets/images/product/11.jpg" alt="cart" />
                                </a>
                              </div>
                              <div className="cart-des">
                                <a href="#">Product Title Hore</a>
                                <p>$20.00</p>
                              </div>
                              <div className="cart-btn">
                                <a href="#">
                                  <i className="fa fa-times" />
                                </a>
                              </div>
                            </div>
                            <div className="cart-item">
                              <div className="cart-img">
                                <a href="#">
                                  <img src="assets/images/product/12.jpg" alt="cart" />
                                </a>
                              </div>
                              <div className="cart-des">
                                <a href="#">Product Title Hore</a>
                                <p>$20.00</p>
                              </div>
                              <div className="cart-btn">
                                <a href="#">
                                  <i className="fa fa-times" />
                                </a>
                              </div>
                            </div>
                            <div className="cart-bottom">
                              <div className="cart-subtotal">
                                <p>
                                  Total: <b className="float-right">$40.00</b>
                                </p>
                              </div>
                              <div className="cart-action">
                                <a href="#" className="lab-btn mx-2">
                                  <span>View Cart</span>
                                </a>
                                <a href="#" className="lab-btn">
                                  <span>Check Out</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="search-option">
                          <i className="fas fa-search" />
                        </div>
                      </li>
                      <li>
                        <div className="user-panel">
                          <i className="fas fa-user" />
                          <div className="user-menu">
                            <div className="user-menu-item">
                              {loginInfo ? (
                                <>
                                  <span className="gretting">
                                    <strong>Welcome,</strong> {loginInfo.firstname}
                                  </span>
                                  {loginInfo.role === 'admin' || loginInfo.role === 'manager' ? (
                                    <Link to="/admin" className="lab-btn">
                                      <span>Dashboard</span>
                                    </Link>
                                  ) : (
                                    <Link to="/user" className="lab-btn">
                                      <span>Dashboard</span>
                                    </Link>
                                  )}

                                  <button
                                    type="button"
                                    onClick={logOut}
                                    className="btn btn-outline-danger"
                                  >
                                    Log Out
                                  </button>
                                </>
                              ) : (
                                <>
                                  <Link to="login" className="lab-btn">
                                    <span>Login</span>
                                  </Link>
                                  <Link to="register" className="lab-btn">
                                    <span>Register</span>
                                  </Link>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
