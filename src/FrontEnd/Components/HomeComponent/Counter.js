import React from 'react';

function Counter() {
  return (
    <div className="counterup-section padding-tb bg_counter bg_img">
      <div className="overlay" />
      <div className="container">
        <div className="section-wrapper">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-item">
                <div className="counter-inner">
                  <div className="counter-thumb">
                    <img src="assets/images/counter/honey.jpg" alt="counter" />
                  </div>
                  <div className="counter-content">
                    <h3 className="count-number">2040</h3>
                    <p className="count-title">Organic Honey</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-item">
                <div className="counter-inner">
                  <div className="counter-thumb">
                    <img src="assets/images/counter/mango.jpg" alt="counter" />
                  </div>
                  <div className="counter-content">
                    <h3 className="count-number">6200</h3>
                    <p className="count-title">Organic Mango</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-item">
                <div className="counter-inner">
                  <div className="counter-thumb">
                    <img src="assets/images/counter/vegetables.jpg" alt="counter" />
                  </div>
                  <div className="counter-content">
                    <h3 className="count-number">8100</h3>
                    <p className="count-title">Organic Vegetables</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="counter-item">
                <div className="counter-inner">
                  <div className="counter-thumb">
                    <img src="assets/images/counter/lichi.jpg" alt="counter" />
                  </div>
                  <div className="counter-content">
                    <h3 className="count-number">6300</h3>
                    <p className="count-title">Organic Lichi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
