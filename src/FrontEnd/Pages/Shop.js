import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { API_PATH } from '../../API_PATH';
import DateTime from '../../Components/DateTime';
import useSessionStorage from '../../hooks/useSessionStorage';
import Newsletter from '../Components/Newsletter';
import './Shop.css';

function Shop() {
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);
  const [products, cartItems, onAdd] = useOutletContext();
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    document.getElementsByClassName('shop-page')[0].scrollIntoView();
    showAvailable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Find latest products using sort method
  const latestProducts = products
    .sort((p1, p2) =>
      // eslint-disable-next-line no-nested-ternary
      p1.creation_time < p2.creation_time ? 1 : p1.creation_time > p2.creation_time ? -1 : 0
    )
    .filter((item) => item.status === 'available')
    .slice(0, 4);

  const addFavourite = async (userid, prodid) => {
    await axios
      .post(`${API_PATH}/favourites/add_favourite.php`, {
        userid,
        prodid,
      })
      .then((res) => {
        alert(res.data.msg);
      });
  };

  // Show upcoming products
  const showUpcoming = () => {
    setProductList(products.filter((product) => product.status === 'upcoming'));
  };

  // Show Available Products
  const showAvailable = () => {
    setProductList(products.filter((product) => product.status === 'available'));
  };

  // Filter Method Starts
  const [category, setCategory] = useState('');

  let filteredProducts = productList;
  if (category !== '') {
    filteredProducts = productList.filter((product) => product.category === category);
  }

  // Search Method start
  const [searchItems, setSearchItems] = useState('');
  const onSearch = (event) => {
    setSearchItems(event.target.value);
    // console.log(searchItems);
  };

  // let searchedProducts = products;
  let searchedProducts = filteredProducts;
  searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchItems.toLocaleLowerCase())
  );

  return (
    <>
      {/* <!-- Page Header Section Start Here --> */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay" />
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">Products Page</h4>
            <ul className="agri-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="shop">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Page Header Section Ending Here --> */}

      {/* <!-- shop page Section Start Here --> */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-12">
                <article>
                  <div className="shop-title d-flex flex-wrap justify-content-between">
                    <p>
                      Showing 01 - {searchedProducts.length} of {searchedProducts.length} Results
                    </p>
                  </div>

                  <div className="shop-product-wrap grids row justify-content-center">
                    {/* Start Loop */}
                    {searchedProducts.map((item) => (
                      <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                        <div className="product-item">
                          <div className="product-thumb">
                            <img src={`/assets/images/product/${item.thumbnail}`} alt="shope" />
                            <div className="product-action-link">
                              <Link to={`view-product/${item.id}`}>
                                <i className="icofont-eye" />
                              </Link>
                              {loginInfo?.id ? (
                                <a
                                  role="button"
                                  onClick={() => addFavourite(loginInfo.id, item.id)}
                                >
                                  <i className="icofont-heart-alt" />
                                </a>
                              ) : null}

                              {(loginInfo?.role !== 'admin' || loginInfo?.role !== 'manager') &&
                              item.status === 'available' ? (
                                <a onClick={() => onAdd(item)} style={{ cursor: 'pointer' }}>
                                  <i className="icofont-cart-alt" />
                                </a>
                              ) : null}
                            </div>
                          </div>
                          <div className="product-content">
                            <h6>
                              <a href="#">{item.name}</a>
                            </h6>
                            <h6>Tk. {Number(item.price).toFixed(2)}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <div className="paginations">
                    <ul className="agri-ul d-flex flex-wrap justify-content-center">
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="d-none d-sm-block">
                        <a href="#">2</a>
                      </li>
                      <li className="d-none d-sm-block">
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a className="dot">...</a>
                      </li>
                      <li className="d-none d-sm-block">
                        <a href="#">9</a>
                      </li>
                      <li className="d-none d-sm-block">
                        <a href="#">10</a>
                      </li>
                      <li>
                        <a href="#">11</a>
                      </li>
                    </ul>
                  </div> */}
                </article>
              </div>
              <div className="col-lg-3 col-md-7 col-12">
                <aside>
                  <div className="widget widget-search">
                    <div className="widget-header">
                      <h5>Search Product</h5>
                    </div>
                    <div className="search-wrapper">
                      <input
                        type="text"
                        name="search"
                        onChange={onSearch}
                        placeholder="Your Search..."
                      />
                    </div>
                  </div>

                  <div className="widget my-4 p-0">
                    <div className="widget-header">
                      <h5>Filter Products</h5>
                    </div>
                    <div className="d-flex justify-content-between my-2">
                      <button
                        type="button"
                        onClick={showAvailable}
                        className="btn btn-outline-success"
                      >
                        Available
                      </button>
                      <button
                        type="button"
                        onClick={showUpcoming}
                        className="btn btn-outline-warning"
                      >
                        Upcoming
                      </button>
                    </div>
                  </div>

                  <div className="widget widget-category">
                    <div className="widget-header">
                      <h5>All Categories</h5>
                    </div>
                    <div className="widget-wrapper">
                      <ul className="agri-ul shop-menu">
                        <li>
                          <a className="filter-btn" onClick={() => setCategory('')}>
                            All Products
                          </a>
                        </li>
                        <li>
                          <a className="filter-btn" onClick={() => setCategory('vegetable')}>
                            Vegetables
                          </a>
                        </li>
                        <li>
                          <a className="filter-btn" onClick={() => setCategory('fruit')}>
                            Fruits
                          </a>
                        </li>
                        <li>
                          <a className="filter-btn" onClick={() => setCategory('honey')}>
                            Honey
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="widget widget-post">
                    <div className="widget-header">
                      <h5>Latests Products</h5>
                    </div>
                    <ul className="agri-ul widget-wrapper">
                      {latestProducts.map((item) => (
                        <li className="d-flex flex-wrap justify-content-between" key={item.id}>
                          <div className="post-thumb">
                            <Link to={`/shop/view-product/${item.id}`}>
                              <img src={`/assets/images/product/${item.thumbnail}`} alt="product" />
                            </Link>
                          </div>
                          <div className="post-content">
                            <Link to={`/shop/view-product/${item.id}`}>
                              <h6>{item.name}</h6>
                            </Link>
                            <p>
                              <DateTime time={item.creation_time} />
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- shop page Section ENding Here --> */}

      {/* <!-- newsletters section start here --> */}
      <Newsletter />
      {/* <!-- newsletters section ending here --> */}
    </>
  );
}

export default Shop;
