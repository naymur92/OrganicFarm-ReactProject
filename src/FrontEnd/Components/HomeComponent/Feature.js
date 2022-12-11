import React from 'react';
import { Link } from 'react-router-dom';

function Feature() {
  return (
    <section className="feature-section padding-tb">
      <div className="container">
        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
          <h3>Fruits & Vegetable Keep Your Health</h3>
          <p>Conveniently customize proactive services leveraged interfaces without Globally </p>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
              <div className="feature-item-2">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src="assets/images/feature/07.png" alt="feature" />
                  </div>
                  <div className="feature-content">
                    <Link to="shop">
                      <h5>Tomato</h5>
                    </Link>
                    <p>Continually aggregate friction web interfaces thout</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.5s">
              <div className="feature-item-2">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src="assets/images/feature/mango.jpg" alt="feature" />
                  </div>
                  <div className="feature-content">
                    <Link to="shop">
                      <h5>Mango</h5>
                    </Link>
                    <p>Continually aggregate friction web interfaces thout</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-item-2">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src="assets/images/feature/honey.jpg" alt="feature" />
                  </div>
                  <div className="feature-content">
                    <Link to="shop">
                      <h5>Honey</h5>
                    </Link>
                    <p>Continually aggregate friction web interfaces thout</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.7s">
              <div className="feature-item-2">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src="assets/images/feature/banana.jpg" alt="feature" />
                  </div>
                  <div className="feature-content">
                    <Link to="shop">
                      <h5>Banana</h5>
                    </Link>
                    <p>Continually aggregate friction web interfaces thout</p>
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

export default Feature;
