import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <section className="fore-zero padding-tb">
      <div className="container">
        <div className="section-wrapper">
          <div className="zero-item text-center">
            <h2>Oops, sorry we can&apos;t find that page</h2>
            <div className="zero-thumb">
              <img src="/assets/images/404.png" alt="404" />
            </div>
            <div className="zero-content">
              <Link to="/" className="lab-btn">
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
