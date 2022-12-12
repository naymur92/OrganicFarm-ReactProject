import React, { useEffect } from 'react';
import Counter from '../Components/HomeComponent/Counter';

function About() {
  useEffect(() => {
    // document.getElementsByClassName('page-header')[0].scrollIntoView();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <!-- Page Header Section Start Here --> */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay" />
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">About us</h4>
            <ul className="agri-ul">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a className="active">About</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Page Header Section Ending Here --> */}

      {/* <!-- about section start here --> */}
      <section className="about-us about-page padding-tb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="about-thumb">
                <img src="assets/images/about/01.png" alt="about-thumb" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="section-wrapper">
                <h3>We are Best Organic Products for Your Health.</h3>
                <h5>
                  Powerful tool for your customer to help user find solution for build something
                  great.
                </h5>
                <p>
                  Conveniently customize proactive web services for leveraged interfaces without
                  globally continually aggregate frictionlent without globally wellies richard.
                </p>
                <p>
                  Authoritatively plagiarize synergistic total linkage before cost effective
                  leadership skills. Proactively innovate distributed be practices through seamless
                  deliverables. Uniquely maximize granular benefits before exceptional deliverables.
                </p>
              </div>
              <div className="text-start">
                <a href="#" className="lab-btn">
                  <span>About Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about section ending here --> */}

      {/* <!-- counter up section start here --> */}
      <Counter />
      {/* <!-- counter up section ending here --> */}

      {/* <!-- Histori section Start here --> */}
      <section className="history-section padding-tb pb-0">
        <div className="container">
          <div className="section-header text-start">
            <h3>History</h3>
            <h3>25 Years Agricul Farm Traditions</h3>
          </div>
          <div className="section-wrapper">
            <div className="history-item">
              <div className="history-inner">
                <div className="history-thumb">
                  <img src="assets/images/history/01.jpg" alt="history" />
                </div>
                <div className="history-content">
                  <div className="hc-left">
                    <h3>Since</h3>
                    <h2>1995</h2>
                  </div>
                  <div className="hc-right">
                    <p>
                      Continually productize compelling elated them setting up to website with all
                      theme imperdienttmolestieo continually productiz compellin quality for packedq
                      for packed with all elated themes setting up to website and creating pages
                      compellin quality for packed with all elated themes setting
                      website.Continually productize compelling quality elated them website with all
                      them imp creating pages compelling quality for packed with all elated themes
                      setting up to website .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Histori section ending here --> */}

      {/* <!-- testimonial section start here --> */}
      <section className="testimonial-section padding-tb">
        <div className="container">
          <div className="section-header">
            <h3>What Client Say Our Agricul Farm</h3>
          </div>
          <div className="section-wrapper">
            <div className="testi-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-item">
                    <div className="testi-inner">
                      <div className="testi-head">
                        <div className="testi-thumb">
                          <img src="assets/images/testimonial/01.jpg" alt="testimonial" />
                        </div>
                        <div className="testi-clients">
                          <a href="#">
                            <h5>Jeson Smith</h5>
                          </a>
                          <p>Founder & Ceo</p>
                          <div className="rating">
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="testi-body">
                        <p>
                          <span className="img-left">
                            <img src="assets/images/testimonial/qute.png" alt="quete" />
                          </span>
                          Continually Onceptualizef Technically invs Professionally monetizeturkeyf
                          Testingdu Frofessionally oe-enablfunctaizede-come rce Onceptualize
                          Technically initiatives.
                          <span className="img-right">
                            <img src="assets/images/testimonial/quete-left.png" alt="quete" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-item">
                    <div className="testi-inner">
                      <div className="testi-head">
                        <div className="testi-thumb">
                          <img src="assets/images/testimonial/02.jpg" alt="testimonial" />
                        </div>
                        <div className="testi-clients">
                          <a href="#">
                            <h5>Sahjahan Sagor</h5>
                          </a>
                          <p>Founder & Ceo</p>
                          <div className="rating">
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="testi-body">
                        <p>
                          <span className="img-left">
                            <img src="assets/images/testimonial/qute.png" alt="quete" />
                          </span>
                          Continually Onceptualizef Technically invs Professionally monetizeturkeyf
                          Testingdu Frofessionally oe-enablfunctaizede-come rce Onceptualize
                          Technically initiatives.
                          <span className="img-right">
                            <img src="assets/images/testimonial/quete-left.png" alt="quete" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-item">
                    <div className="testi-inner">
                      <div className="testi-head">
                        <div className="testi-thumb">
                          <img src="assets/images/testimonial/03.jpg" alt="testimonial" />
                        </div>
                        <div className="testi-clients">
                          <a href="#">
                            <h5>Alisha Kabir</h5>
                          </a>
                          <p>Founder & Ceo</p>
                          <div className="rating">
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="testi-body">
                        <p>
                          <span className="img-left">
                            <img src="assets/images/testimonial/qute.png" alt="quete" />
                          </span>
                          Continually Onceptualizef Technically invs Professionally monetizeturkeyf
                          Testingdu Frofessionally oe-enablfunctaizede-come rce Onceptualize
                          Technically initiatives.
                          <span className="img-right">
                            <img src="assets/images/testimonial/quete-left.png" alt="quete" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- testimonial section ending here --> */}
    </>
  );
}

export default About;
