import React from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <section className="product-section product-style3 padding-tb">
      <div className="container-fluid">
        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
          <h3>Fruits & Vegetable Farm Gallery</h3>
          <p>Conveniently customize proactives into everaged interfaces without Globally</p>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center g-0">
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
              <div className="product-item">
                <div className="product-inner">
                  <div className="product-thumb">
                    <img src="assets/images/product/lichi.jpg" alt="product" />
                  </div>
                  <div className="product-content">
                    <Link to="shop" className="product-name">
                      Lichi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.5s">
              <div className="product-item">
                <div className="product-inner">
                  <div className="product-thumb">
                    <img src="assets/images/product/vegitables.jpg" alt="product" />
                  </div>
                  <div className="product-content">
                    <Link to="shop" className="product-name">
                      Vegitables
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.6s">
              <div className="product-item">
                <div className="product-inner">
                  <div className="product-thumb">
                    <img src="assets/images/product/mango.jpg" alt="product" />
                  </div>
                  <div className="product-content">
                    <Link to="shop" className="product-name">
                      Mango
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.7s">
              <div className="product-item">
                <div className="product-inner">
                  <div className="product-thumb">
                    <img src="assets/images/product/honey.jpg" alt="product" />
                  </div>
                  <div className="product-content">
                    <Link to="shop" className="product-name">
                      Honey
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
