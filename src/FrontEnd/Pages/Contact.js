import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* <!-- Page Header Section Start Here --> */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay" />
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">Contact us</h4>
            <ul className="agri-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="contact" className="active">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Page Header Section Ending Here --> */}

      {/* <!-- Contact Us Section Start Here --> */}
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="contac-top">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icofont-google-map" />
                  </div>
                  <div className="contact-details">
                    <p>Alamdanga 7210, Chuadanga</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icofont-phone" />
                  </div>
                  <div className="contact-details">
                    <p>+880-1737-036324, +880-1558-981652</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="icofont-envelope" />
                  </div>
                  <div className="contact-details">
                    <p>organicfruit@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contac-bottom">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-12">
                <div className="location-map">
                  <div id="map">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4600.560978769952!2d88.93423757447611!3d23.766369597688477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc487956ae37ae6ee!2zMjPCsDQ2JzA2LjciTiA4OMKwNTUnNTAuNiJF!5e0!3m2!1sen!2sbd!4v1669828612598!5m2!1sen!2sbd"
                      style={{ border: '0' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="contact-form">
                  <form action="#" method="POST" id="commentform" className="comment-form">
                    <input type="text" name="name" className="" placeholder="Name*" />
                    <input type="email" name="email" className="" placeholder="Email*" />
                    <input type="text" name="subject" className="" placeholder="Subject*" />
                    <textarea name="text" id="role" cols="30" rows="10" placeholder="Message*" />
                    <button type="submit" className="lab-btn">
                      <span>Submit Now</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact Us Section ENding Here --></div> */}

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

export default Contact;
