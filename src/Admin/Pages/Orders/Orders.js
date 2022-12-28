import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import DateTime from '../../../Components/DateTime';

function Orders() {
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
    changeOrderStatus,
    deleteOrder,
  ] = useOutletContext();

  const [status, setStatus] = useState('');
  let orderLists = orders;
  if (status === '') {
    orderLists = orders;
  } else {
    orderLists = orders.filter((order) => order.status === status);
  }
  // console.log(orderLists);

  const [searchTerm, setSearchTerm] = useState('');
  const onSearch = (e) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm);
  };

  // Add serial number on every product
  orderLists = orderLists.map((item, index) => ({ sl_no: index + 1, ...item }));

  // Pagination
  const [ordersPerPage, setOrdersPerPage] = useState(8);
  const [selectedPage, setSelectedPage] = useState(1);

  const pageIndex = (selectedPage - 1) * ordersPerPage;
  const paginatedOrders = orderLists.slice(pageIndex, pageIndex + Number(ordersPerPage));
  const pageNumber = Math.ceil(orderLists.length / ordersPerPage);
  const pageNumbers = Array.from({ length: pageNumber }, (x, i) => i + 1); // generate page array

  const prevPage = () => {
    if (selectedPage != 1) {
      setSelectedPage(selectedPage - 1);
    }
  };
  const nextPage = () => {
    if (selectedPage != pageNumber) {
      setSelectedPage(selectedPage + 1);
    }
  };

  // const searchedOrders = orderLists.filter((order) =>
  //   // eslint-disable-next-line array-callback-return, consistent-return
  //   order.products.filter((product) => {
  //     if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
  //       return true;
  //     }
  //   })
  // );
  // console.log(searchedOrders);

  return (
    <div className="container-fluid cleartop">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">Orders Area</h1>
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
                    onClick={() => setStatus('')}
                    className="left-menu btn btn-primary"
                  >
                    All Orders
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setStatus('pending')}
                    className="left-menu btn btn-outline-primary"
                  >
                    Pending
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setStatus('cancelled')}
                    className="left-menu btn btn-outline-primary"
                  >
                    Cancelled
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setStatus('confirmed')}
                    className="left-menu btn btn-outline-primary"
                  >
                    Confirmed
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setStatus('delivered')}
                    className="left-menu btn btn-outline-primary"
                  >
                    Delivered
                  </button>
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
                  <h5 className="text-light pt-1">Order Table</h5>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 search-box">
                  <label htmlFor="_search">
                    <strong>Search Order:</strong>
                  </label>
                  <input
                    type="text"
                    name="search"
                    onChange={onSearch}
                    id="_search"
                    className="form-control"
                    placeholder="search here"
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr className="text-center">
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Cost</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedOrders?.map((order) => (
                    <tr key={order.id.toString()} className="align-middle">
                      <td>{order.sl_no}</td>
                      <td>
                        <ol>
                          {order.products.map((product) => (
                            <li className="my-2" key={product.id}>
                              {product.name} ({product.qty})
                            </li>
                          ))}
                        </ol>
                      </td>
                      <td>
                        <address>
                          {order.address?.name} <br />
                          {order.address?.area} <br />
                          {order.address?.address} <br />
                          {order.address?.zipcode} <br />
                          {order.address?.phone} <br />
                        </address>
                      </td>
                      <td>
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>Subtotal:</strong>
                          </div>
                          <div>Tk. {order.subtotal}</div>
                        </div>
                        <div className="d-flex justify-content-between my-2">
                          <div>
                            <strong>Shipping:</strong>
                          </div>
                          <div>Tk. {order.shipping}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>Total:</strong>
                          </div>
                          <div>Tk. {order.total}</div>
                        </div>
                      </td>
                      <td>
                        <DateTime time={order.order_time} />
                      </td>
                      <td>{order.status}</td>
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
                              <Link to={`view-order/${order.id}`} className="dropdown-item">
                                <i className="fas fa-eye text-info" /> View
                              </Link>
                            </li>
                            {/* Conditional part */}
                            {order.status === 'pending' ? (
                              <>
                                <li>
                                  <button
                                    type="button"
                                    onClick={() => changeOrderStatus(order.id, 'confirmed')}
                                    className="dropdown-item"
                                  >
                                    <i className="fas fa-check text-primary" /> Confirm
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    onClick={() => cancelOrder(order.id, order.products)}
                                    className="dropdown-item"
                                  >
                                    <i className="fas fa-times text-warning" /> Cancel
                                  </button>
                                </li>
                              </>
                            ) : null}
                            {order.status === 'confirmed' ? (
                              <li>
                                <button
                                  type="button"
                                  onClick={() => changeOrderStatus(order.id, 'delivered')}
                                  className="dropdown-item"
                                >
                                  <i className="fas fa-check text-primary" /> Delivered
                                </button>
                              </li>
                            ) : null}
                            <li>
                              <button
                                type="button"
                                onClick={() => deleteOrder(order.id)}
                                className="dropdown-item"
                              >
                                <i className="fas fa-trash text-danger" /> Delete Order
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {paginatedOrders?.length === 0 ? (
                <div className="alert alert-warning text-center">
                  <strong>No Data</strong>
                </div>
              ) : null}
              {/* Pagination starts */}
              <div className="row">
                <div className="col-2 d-flex justify-content-between">
                  <label htmlFor="_pperpage" className="mt-1">
                    <strong>Product Per Page:</strong>
                  </label>
                  <select
                    id="_pperpage"
                    className="form-control"
                    onChange={(e) => {
                      setOrdersPerPage(e.target.value);
                      setSelectedPage(1);
                    }}
                    style={{ width: '45px' }}
                  >
                    <option value="4">4</option>
                    <option value="8" selected>
                      8
                    </option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="offset-4 col-6">
                  <div className="pagination float-end">
                    <span className="mt-1 mx-3">
                      Showing{' '}
                      <strong>
                        ({paginatedOrders[0]?.sl_no} -{' '}
                        {paginatedOrders[paginatedOrders.length - 1]?.sl_no})
                      </strong>{' '}
                      products out of <strong>{orderLists.length}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={prevPage}
                      className={`btn btn-outline-primary mx-3 ${
                        selectedPage == 1 ? 'disabled' : null
                      }`}
                    >
                      Prev
                    </button>
                    {pageNumbers.map((sl) => (
                      <button
                        type="button"
                        className={`btn btn-outline-primary mx-1 ${
                          sl === selectedPage ? 'active' : ''
                        }`}
                        onClick={() => setSelectedPage(sl)}
                      >
                        {sl}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={nextPage}
                      className={`btn btn-outline-primary mx-3 ${
                        selectedPage == pageNumber ? 'disabled' : null
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              {/* Pagination ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
