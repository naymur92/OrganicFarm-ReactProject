import React, { useState } from 'react';
import { Link, NavLink, useOutletContext } from 'react-router-dom';

function Products() {
  const [
    loginInfo,
    setLoginInfo,
    users,
    changeUserStatus,
    changeEmpRole,
    products,
    changeStatus,
    delProd,
    orders,
    cancelOrder,
  ] = useOutletContext();

  const delProdConfirm = (id) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are You Sure?')) {
      delProd(id);
    }
  };

  const [prodStatus, setStatus] = useState('');
  let productList = products;
  if (prodStatus !== '') {
    productList = products.filter((product) => product.status === prodStatus);
  }

  // Filter Method
  const [category, setCategory] = useState('');
  const filteredProducts = productList.filter((product) => product.category.includes(category));

  // Search Method start
  const [searchItems, setSearchItems] = useState('');
  const onSearch = (event) => {
    setSearchItems(event.target.value);
  };

  let searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchItems.toLocaleLowerCase())
  ); // search method ends

  // Add serial number on every products
  searchedProducts = searchedProducts.map((item, index) => ({ sl_no: index + 1, ...item }));

  // Pagination
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [selectedPage, setSelectedPage] = useState(1);

  const pageIndex = (selectedPage - 1) * productsPerPage;
  const paginatedProducts = searchedProducts.slice(pageIndex, pageIndex + Number(productsPerPage));
  const pageNumber = Math.ceil(searchedProducts.length / productsPerPage);
  const pageNumbers = Array.from({ length: pageNumber }, (x, i) => i); // generate page array

  // show All product
  const showAll = () => {
    setStatus('');
    setCategory('');
  };

  return (
    <div className="container-fluid cleartop">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">Products Area</h1>
          </div>
        </div>
        <div className="col-sm-3 col-md-2">
          <div className="card border-0 mt-2">
            <div className="card-header bg-primary">
              <h3 className="text-light">Left Bar</h3>
            </div>
            <div className="card-body minheight">
              <ul className="menu">
                <li>
                  <button
                    type="button"
                    onClick={() => showAll()}
                    className="left-menu btn btn-primary"
                  >
                    All Products
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setStatus('available')}
                    className="left-menu btn btn-outline-primary"
                  >
                    Available
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setStatus('unavailable')}
                    className="left-menu btn btn-outline-primary"
                  >
                    Unavailable
                  </button>
                </li>
                <li className="mt-3">
                  <button
                    type="button"
                    onClick={() => setCategory('vegetable')}
                    className="left-menu btn btn-outline-primary"
                  >
                    Vegetables
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCategory('fruit')}
                    className="left-menu btn btn-outline-primary"
                  >
                    Fruits
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCategory('honey')}
                    className="left-menu btn btn-outline-primary"
                  >
                    Honey
                  </button>
                </li>
                <li>
                  <NavLink to="addproduct" className="left-menu btn btn-primary mt-3">
                    Add Product
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-9 col-md-10">
          {/* <!-- Content Area --> */}
          <div className="card mt-2">
            <div className="card-header bg-warning">
              <div className="row justify-content-end">
                <div className="col-sm-6 col-md-7 col-lg-8">
                  <h5 className="text-light pt-1">Product Table</h5>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 search-box">
                  <label htmlFor="_search">
                    <strong>Search Product:</strong>
                  </label>
                  <input
                    type="text"
                    name="search"
                    id="_search"
                    onChange={onSearch}
                    className="form-control"
                    placeholder="enter product name"
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedProducts?.map((item) => (
                    <tr key={item.id.toString()}>
                      <td>{item.sl_no}</td>
                      <td>
                        <img
                          src={`/assets/images/product/${item.thumbnail}`}
                          style={{ width: '70px' }}
                          alt=""
                          className="img-thumbnail mx-3"
                        />
                        {item.name}
                      </td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td>{item.status}</td>
                      <td>{item.stock}</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Action
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                              <Link to={`viewproduct/${item.id}`} className="dropdown-item">
                                <i className="fas fa-eye text-info" /> View
                              </Link>
                            </li>
                            <li>
                              <Link to={`editproduct/${item.id}`} className="dropdown-item">
                                <i className="fas fa-pen text-success" /> Edit
                              </Link>
                            </li>
                            {/* Conditional part */}
                            {item.status !== 'available' ? (
                              <li>
                                <button
                                  type="button"
                                  onClick={() => changeStatus(item.id, 'available')}
                                  className="dropdown-item"
                                >
                                  <i className="fas fa-check text-primary" /> Make Available
                                </button>
                              </li>
                            ) : (
                              <li>
                                <button
                                  type="button"
                                  onClick={() => changeStatus(item.id, 'unavailable')}
                                  className="dropdown-item"
                                >
                                  <i className="fas fa-ban text-danger" /> Make unavailable
                                </button>
                              </li>
                            )}
                            <li>
                              <button
                                type="button"
                                onClick={() => delProdConfirm(item.id)}
                                className="dropdown-item"
                              >
                                <i className="fas fa-trash text-danger" /> Delete Product
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-2 d-flex justify-content-between">
                  <label htmlFor="_pperpage">
                    <strong>Product Per Page:</strong>
                  </label>
                  <select
                    id="_pperpage"
                    className="form-control"
                    onChange={(e) => {
                      setProductsPerPage(e.target.value);
                      setSelectedPage(1);
                    }}
                    style={{ maxWidth: '50px' }}
                  >
                    <option value="4">4</option>
                    <option value="8" selected>
                      8
                    </option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="offset-6 col-4">
                  <div className="pagination float-end">
                    {pageNumbers.map((sl) => (
                      <button
                        type="button"
                        className={`btn btn-outline-primary mx-1 ${
                          sl + 1 === selectedPage ? 'active' : ''
                        }`}
                        onClick={() => setSelectedPage(sl + 1)}
                      >
                        {sl + 1}
                      </button>
                    ))}
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

export default Products;
