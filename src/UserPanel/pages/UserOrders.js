// import axios from 'axios';
import { Link, useOutletContext } from 'react-router-dom';
import DateTime from '../../Components/DateTime';

function UserOrders() {
  const [loginInfo, cancelOrder, orders] = useOutletContext();
  // console.log(orders);

  return (
    <div className="card">
      <div className="card-header bg-theme">
        <h3 className="text-light text-center">Order List</h3>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th>SL No.</th>
              <th>Product Details</th>
              <th>Cost</th>
              <th>Order Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="align-middle">
                <td>{index + 1}</td>
                <td>
                  <ol>
                    {order.products.map((product) => (
                      <li className="my-2" key={product.id}>
                        <div className="d-flex justify-content-between">
                          <div>{product.name}</div>
                          <div>
                            Tk. {product.price}x{product.qty} = Tk. {product.price * product.qty}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
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
                        <Link className="dropdown-item" to={`view-order/${order.id}`}>
                          <i className="fas fa-eye text-primary mx-3" />
                          View
                        </Link>
                      </li>
                      <li>
                        {order.status === 'pending' ? (
                          <Link
                            role="button"
                            onClick={() => cancelOrder(order.id, order.products)}
                            className="dropdown-item"
                          >
                            <i className="fas fa-times text-danger mx-3" />
                            Cancel Order
                          </Link>
                        ) : null}
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
  );
}

export default UserOrders;
