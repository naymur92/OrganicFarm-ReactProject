import React from 'react';
import { Link, NavLink, useOutletContext } from 'react-router-dom';
import DateTime from '../../../Components/DateTime';

function Users() {
  const [loginInfo, setLoginInfo, users, products, changeStatus, delProd, orders, cancelOrder] =
    useOutletContext();
  return (
    <div className="container-fluid cleartop">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">Users Area</h1>
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
                    All Users
                  </button>
                </li>
                <li>
                  <button type="button" className="left-menu btn btn-outline-primary">
                    All Pendings
                  </button>
                </li>
                <li>
                  <button type="button" className="left-menu btn btn-outline-primary">
                    All Muted
                  </button>
                </li>
                <li>
                  <NavLink to="add-employee" className="left-menu btn btn-primary mt-3">
                    Add Employee
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
                  <h5 className="text-light pt-1">Users Table</h5>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 search-box">
                  <label htmlFor="_search">
                    <strong>Search here:</strong>
                  </label>
                  <input
                    type="text"
                    name="search"
                    id="_search"
                    className="form-control"
                    placeholder="enter name"
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
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Since From</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <tr key={user.id.toString()}>
                      <td>{index + 1}</td>
                      <td>
                        {user.firstname} {user.lastname}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.status}</td>
                      <td>
                        <DateTime time={user.creation_time} />
                      </td>
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
                              <Link to={`view-user/${user.id}`} className="dropdown-item">
                                <i className="fas fa-eye text-info" /> View
                              </Link>
                            </li>
                            {user.role !== 'admin' ? (
                              <li>
                                <Link to={`edit-user/${user.id}`} className="dropdown-item">
                                  <i className="fas fa-pen text-success" /> Edit
                                </Link>
                              </li>
                            ) : null}

                            {/* Conditional part */}
                            {user.status === 'pending' ? (
                              <>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i className="fas fa-check text-primary" /> Active
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i className="fas fa-times text-danger" /> Block User
                                  </button>
                                </li>
                              </>
                            ) : null}
                            {user.role === 'user' && user.status !== 'pending' ? (
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i className="fas fa-ban text-danger" /> Mute User
                                </button>
                              </li>
                            ) : null}
                            {user.role === 'employee' ? (
                              <>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i className="fas fa-check text-success" /> Promote to Manager
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i className="fas fa-times text-danger" /> Close Employee
                                  </button>
                                </li>
                              </>
                            ) : null}
                            {user.role === 'manager' ? (
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i className="fas fa-arrow-down text-warning" /> Demote to
                                  Employee
                                </button>
                              </li>
                            ) : null}
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

export default Users;
