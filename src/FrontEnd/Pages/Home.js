import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Counter from '../Components/HomeComponent/Counter';
import Feature from '../Components/HomeComponent/Feature';
import Gallery from '../Components/HomeComponent/Gallery';
import Product from '../Components/HomeComponent/Product';
import Slider from '../Components/HomeComponent/Slider';

function Home() {
  const [products, cartItems, onAdd] = useOutletContext();
  // console.log(products);

  return (
    <>
      <Slider />

      {/* <!-- Feature Secton Start Here --> */}
      <Feature />
      {/* <!-- Feature Secton ending Here --> */}

      {/* <!-- about section start here --> */}
      <section className="about-us home-2 padding-tb">
        <div className="shape-image">
          <img src="/assets/images/about/shape/01.png" alt="abs-thumb" className="shape-1" />
          <img src="/assets/images/about/shape/02.png" alt="abs-thumb" className="shape-2" />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-xl-8 col-12">
                <div
                  className="section-header text-center text-xl-start wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h3>We Are Best Organic Fruits And Vegetable Farm.</h3>
                  <p>
                    Conveniently customize proactive web services for leveraged without globally
                    wellies richard.
                  </p>
                </div>
                <div className="section-wrapper">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
                      <div className="about-item">
                        <div className="about-inner">
                          <div className="about-thumb">
                            <img src="/assets/images/about/icon/01.png" alt="about" />
                          </div>
                          <div className="about-content">
                            <a href="#">
                              <h5>Organic and non-gmo</h5>
                            </a>
                            <p>
                              Continually aggregate frictionle interc without globally wellies
                              richard.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="about-item">
                        <div className="about-inner">
                          <div className="about-thumb">
                            <img src="/assets/images/about/icon/02.png" alt="about" />
                          </div>
                          <div className="about-content">
                            <a href="#">
                              <h5>Best Organic products</h5>
                            </a>
                            <p>
                              Continually aggregate frictionle interc without globally wellies
                              richard.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 wow fadeInUp" data-wow-delay="0.6s">
                      <div className="about-item">
                        <div className="about-inner">
                          <div className="about-thumb">
                            <img src="/assets/images/about/icon/03.png" alt="about" />
                          </div>
                          <div className="about-content">
                            <a href="#">
                              <h5>Healthy and nutritious</h5>
                            </a>
                            <p>
                              Continually aggregate frictionle interc without globally wellies
                              richard.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 wow fadeInUp" data-wow-delay="0.7s">
                      <div className="about-item">
                        <div className="about-inner">
                          <div className="about-thumb">
                            <img src="/assets/images/about/icon/04.png" alt="about" />
                          </div>
                          <div className="about-content">
                            <a href="#">
                              <h5>500 acres of pasture</h5>
                            </a>
                            <p>
                              Continually aggregate frictionle interc without globally wellies
                              richard.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <div className="about-thumb-2 wow fadeInUp" data-wow-delay="0.4s">
                  <img src="/assets/images/about/03.png" alt="about-thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about section ending here --> */}

      {/* <!-- product section start here --> */}
      <Product products={products} onAdd={onAdd} />
      {/* <!-- product section ending here --> */}

      <Counter />

      {/* <!-- product section start here --> */}
      <Gallery />
      {/* <!-- product section ending here --> */}

      {/* <!-- blog section start here --> */}
      <section className="blog-section padding-tb">
        <div className="container">
          <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
            <h3>Agricul Farm Recent Blog</h3>
            <p>Conveniently customize proactive services leveraged interfaces without Globally </p>
          </div>
          <div className="section-wrapper">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-thumb">
                      <a href="blog-single.html">
                        <img src="/assets/images/blog/01.jpg" alt="blog" />
                      </a>
                      <div className="meta-date">
                        <div className="md-pre">
                          <h5>24</h5>
                          <p>Aug</p>
                        </div>
                      </div>
                    </div>
                    <div className="post-content">
                      <a href="blog-single.html">
                        <h5>Tips For Ripening Your Fruits & Vegetable</h5>
                      </a>
                      <div className="meta-post">
                        <p>
                          <span className="admin-name">
                            Admin <a href="#">Rajib Raj</a>
                          </span>
                          <span className="comment-name">
                            <a href="#">10 comments</a>
                          </span>
                        </p>
                      </div>
                      <div className="text-btn">
                        <a href="blog-single.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.5s">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-thumb">
                      <a href="blog-single.html">
                        <img src="/assets/images/blog/02.jpg" alt="blog" />
                      </a>
                      <div className="meta-date">
                        <div className="md-pre">
                          <h5>25</h5>
                          <p>Aug</p>
                        </div>
                      </div>
                    </div>
                    <div className="post-content">
                      <a href="blog-single.html">
                        <h5>Benefits of a Raw Food for your Health </h5>
                      </a>
                      <div className="meta-post">
                        <p>
                          <span className="admin-name">
                            Admin <a href="#">Somrat Islam</a>
                          </span>
                          <span className="comment-name">
                            <a href="#">10 comments</a>
                          </span>
                        </p>
                      </div>
                      <div className="text-btn">
                        <a href="blog-single.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.6s">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-thumb">
                      <a href="blog-single.html">
                        <img src="/assets/images/blog/03.jpg" alt="blog" />
                      </a>
                      <div className="meta-date">
                        <div className="md-pre">
                          <h5>26</h5>
                          <p>Aug</p>
                        </div>
                      </div>
                    </div>
                    <div className="post-content">
                      <a href="blog-single.html">
                        <h5>Superfoods You Should be Eating For Health</h5>
                      </a>
                      <div className="meta-post">
                        <p>
                          <span className="admin-name">
                            Admin <a href="#">Sajahan Sagor</a>
                          </span>
                          <span className="comment-name">
                            <a href="#">10 comments</a>
                          </span>
                        </p>
                      </div>
                      <div className="text-btn">
                        <a href="blog-single.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog section ending here --> */}
    </>
  );
}

export default Home;
