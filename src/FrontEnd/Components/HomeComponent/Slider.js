import React from 'react';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <section className="banner banner-2">
      <div className="banner-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container">
              <div className="banner-item">
                <div className="banner-inner">
                  <div className="banner-thumb">
                    <img src="/assets/images/blog/mango.jpg" alt="banner-slider" />
                  </div>
                  <div className="banner-content">
                    <h3>Mango Farm</h3>
                    <div className="banner-title">Fresh & Organic Fruits For Your Health.</div>
                    <div className="banner-desc">
                      Dynamically supply web-enabled portals for high standards income Completely
                      productivate optimal sources strategic.
                    </div>
                    <Link to="shop" className="lab-btn">
                      <span>Shop Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container">
              <div className="banner-item">
                <div className="banner-inner">
                  <div className="banner-thumb">
                    <img src="/assets/images/blog/04.jpg" alt="banner-slider" />
                  </div>
                  <div className="banner-content">
                    <h3>Vegitable Farm</h3>
                    <div className="banner-title">Fresh Organic Vegitables For Your Health.</div>
                    <div className="banner-desc">
                      Dynamically supply web-enabled portals for high standards income Completely
                      productivate optimal sources strategic.
                    </div>
                    <Link to="shop" className="lab-btn">
                      <span>Shop Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container">
              <div className="banner-item">
                <div className="banner-inner">
                  <div className="banner-thumb">
                    <img src="/assets/images/blog/05.jpg" alt="banner-slider" />
                  </div>
                  <div className="banner-content">
                    <h3>Bee Farm</h3>
                    <div className="banner-title">Fresh Organic Honey For Your Health.</div>
                    <div className="banner-desc">
                      Dynamically supply web-enabled portals for high standards income Completely
                      productivate optimal sources strategic.
                    </div>
                    <Link to="shop" className="lab-btn">
                      <span>Shop Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-pagination" />
      </div>
    </section>
  );
}

export default Slider;
