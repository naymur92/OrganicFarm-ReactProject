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
                  {orderLists?.map((order, index) => (
                    <tr key={order.id.toString()} className="align-middle">
                      <td>{index + 1}</td>
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
              {orderLists?.length === 0 ? (
                <div className="alert alert-warning text-center">
                  <strong>No Data</strong>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
