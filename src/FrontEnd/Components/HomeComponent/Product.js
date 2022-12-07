import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);

  // Get all products
  const allProducts = () => {
    axios.get(`http://localhost/wdpf51_React/organicfarm/api/products/products.php`).then((res) => {
      // console.log(res.data.products);
      setProducts(res.data.products);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    allProducts();

    // console.log(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="product-section product-style2 padding-tb">
      <div className="shape-image">
        <img src="assets/images/product/shape/01.png" alt="abs-thumb" className="shape-1" />
        <img src="assets/images/product/shape/02.png" alt="abs-thumb" className="shape-2" />
      </div>
      <div className="container">
        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
          <h3>Fruits & Vegetable Products</h3>
          <p>Conveniently customize proactives into everaged interfaces without Globally</p>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center">
            {products.slice(0, 8).map((item) => (
              <div
                className="col-lg-3 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="0.4s"
                key={item.id}
              >
                <div className="product-item-2">
                  <div className="product-inner">
                    <div className="product-thumb">
                      <img src={`assets/images/product/${item.thumbnail}`} alt="product" />
                    </div>
                    <div className="product-content">
                      <Link to={`shop/view-product/${item.id}`}>
                        <h5>{item.name}</h5>
                      </Link>
                      <div className="rating">
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                        <i className="icofont-star" />
                      </div>
                      <h6 className="price">Tk. {item.price}</h6>
                      <div className="cart-option">
                        <Link to={`shop/view-product/${item.id}`} className="lab-btn">
                          <span>Add To Cart</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center wow fadeInUp" data-wow-delay="0.5s">
            <Link to="shop" className="lab-btn">
              <span>View Product</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
