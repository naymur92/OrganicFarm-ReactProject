import React from 'react';

function Newsletter() {
  return (
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
  );
}

export default Newsletter;
