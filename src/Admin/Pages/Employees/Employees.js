import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Employees() {
  const [employee, setEmployee] = useState([]);
  return (
    <div className="container-fluid cleartop">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">Employee Area</h1>
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
                  <button type="button" className="left-menu btn btn-outline-primary">
                    All Employees
                  </button>
                </li>
                <li>
                  <button type="button" className="left-menu btn btn-outline-primary">
                    Managers
                  </button>
                </li>
                <li>
                  <button type="button" className="left-menu btn btn-outline-primary">
                    Users
                  </button>
                </li>
                {/* <li>
                  <div className="form-group my-3">
                    <label htmlFor="_available">Available Products</label>
                    <input
                      type="radio"
                      onChange={() => setStatus('available')}
                      className="form-check-input"
                      id="_available"
                      name="availability"
                      value="available"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="_unavailable">Unvailable Products</label>
                    <input
                      type="radio"
                      onChange={() => setStatus('unavailable')}
                      className="form-check-input"
                      id="_unavailable"
                      name="availability"
                      value="unavailable"
                    />
                  </div>
                </li> */}
                <li>
                  <NavLink to="addproduct" className="left-menu btn btn-primary my-3">
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
                  {employee?.map((item, index) => (
                    <tr key={item.id.toString()}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
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
                                <button type="button" className="dropdown-item">
                                  <i className="fas fa-check text-primary" /> Make Available
                                </button>
                              </li>
                            ) : (
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i className="fas fa-ban text-danger" /> Make unavailable
                                </button>
                              </li>
                            )}
                            <li>
                              <button type="button" className="dropdown-item">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
