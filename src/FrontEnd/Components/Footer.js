import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-section padding-tb pb-0">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-12">
              <div className="footer-item">
                <div className="footer-inner">
                  <div className="footer-logo">
                    <img src="/assets/images/logo/01.png" alt="footer-logo" />
                  </div>
                  <div className="footer-desc">
                    <p>
                      Conveniently customizec web services aggregate frictionle internet withouevs
                      Conveniently customizec.
                    </p>
                    <p>
                      aggregate frictionle without aggregate Conveniently customizec efrictionle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="footer-item footer-addtess">
                <div className="footer-inner">
                  <div className="footer-title">
                    <h5>Keep In Touch</h5>
                  </div>
                  <div className="footer-body">
                    <ul className="agri-ul">
                      <li>
                        <div className="icon">
                          <i className="icofont-google-map" />
                        </div>
                        <div className="detalis">
                          <p>Alamdanga 7210, Chuadanga</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icofont-phone" />
                        </div>
                        <div className="detalis">
                          <p>+880 1737 036324, +880 1558 981652</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icofont-envelope" />
                        </div>
                        <div className="detalis">
                          <p>organicfarm@gmail.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="footer-item footer-blog">
                <div className="footer-inner">
                  <div className="footer-title">
                    <h5>OrganicFarm Product</h5>
                  </div>
                  <div className="footer-body">
                    <ul className="agri-ul">
                      <li>
                        <div className="thumb">
                          <a href="blog-single.html">
                            <img src="/assets/images/blog/01.jpg" alt="footer-blog" />
                          </a>
                        </div>
                        <div className="detalis">
                          <a href="blog-single.html">
                            <h5>Fruits &Vegetable</h5>
                          </a>
                          <h6>Tk. 149.99</h6>
                        </div>
                      </li>
                      <li>
                        <div className="thumb">
                          <Link to="shop">
                            <img src="/assets/images/blog/honey.jpg" alt="footer-blog" />
                          </Link>
                        </div>
                        <div className="detalis">
                          <Link to="shop">
                            <h5>Natural &Honey</h5>
                          </Link>
                          <h6>Tk. 599.99</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="footer-item footer-gallery">
                <div className="footer-inner">
                  <div className="footer-title">
                    <h5>OrganicFarm Product</h5>
                  </div>
                  <div className="footer-body">
                    <ul className="agri-ul">
                      <li>
                        <Link to="shop">
                          <img src="/assets/images/gallery/honey.jpg" alt="footer-gallery" />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop">
                          <img src="/assets/images/gallery/lichi.jpg" alt="footer-gallery" />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop">
                          <img src="/assets/images/gallery/mango.jpg" alt="footer-gallery" />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop">
                          <img src="/assets/images/gallery/vegitables.jpg" alt="footer-gallery" />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop">
                          <img src="/assets/images/gallery/05.jpg" alt="footer-gallery" />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop">
                          <img src="/assets/images/gallery/06.jpg" alt="footer-gallery" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2021
            <a href="index.html" target="_blank">
              <span>OrganicFarm</span>
            </a>
            All Rights Reserved By
            <a href="https://naymur.bdprogrammers.com" target="_blank" rel="noreferrer">
              <span>NaymurRahman</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
