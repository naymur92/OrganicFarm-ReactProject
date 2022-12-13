import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

function UserOrders() {
  const [loginInfo] = useOutletContext();
  const [orders, setOrders] = useState([]);

  const userOrders = async (userid) => {
    await axios
      .get('http://localhost/wdpf51_React/organicfarm/api/orders/orders.php', {
        params: { userid },
      })
      .then((res) => {
        if (res.data.success) {
          setOrders(res.data.orders);
        }
        // console.log(res.data);
      });
  };

  useEffect(() => {
    userOrders(loginInfo.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(orders[0]);

  // convert MySQL DATETIME into javascript time
  function DateTime(time) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const date = new Date(time.time);
    return `${date.getHours() > 12 ? date.getHours() - 12 : null}:${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    } ${date.getHours() > 12 ? `PM` : `AM`} - ${date.getDate()} ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;
  }

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
                      <li>
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
                  <div className="d-flex justify-content-between">
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
                          <Link role="button" className="dropdown-item">
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
