import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import useSessionStorage from '../hooks/useSessionStorage';

function UserTemplate({ API_PATH }) {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);
  const pendingCheckout = JSON.parse(localStorage.getItem('pendingcheckout'));
  const [orders, setOrders] = useState([]);

  // console.log(typeof loginInfo);

  const authenticate = () => {
    if (!loginInfo?.id) {
      navigate('/login');
    } else if (loginInfo?.role === 'admin' || loginInfo?.role === 'manager') {
      navigate('/admin');
    }
  };

  // Get Orders
  const userOrders = async (userid) => {
    await axios
      .get(`${API_PATH}/orders/orders.php`, {
        params: { userid },
      })
      .then((res) => {
        if (res.data.success) {
          setOrders(res.data.orders);
        }
        // console.log(res.data);
      });
  };

  const cancelOrder = async (orderid, prodlist) => {
    await axios
      .put(`${API_PATH}/orders/cancel_order.php`, {
        id: orderid,
        products: prodlist,
      })
      .then((res) => {
        // console.log(res.data);
        userOrders(loginInfo.id);
      });
  };

  useEffect(() => {
    // console.log(pendingCheckout);
    userOrders(loginInfo.id);
    if (pendingCheckout?.status === 'pending') {
      navigate('/checkout');
    }
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loginInfo?.id ? (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-3 col-md-2">
          <div className="card" style={{ minHeight: '500px' }}>
            <div className="card-header bg-theme">
              <h5 className="text-light">User Panel</h5>
            </div>
            <div className="card-body">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/user">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="orders">
                    Orders
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="wishlists">
                    Wishlists
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
              <hr className="d-sm-none" />
            </div>
          </div>
        </div>
        <div className="col-sm-9 col-md-10 border-left">
          <Outlet context={[API_PATH, loginInfo, cancelOrder, orders]} />
        </div>
      </div>
    </div>
  ) : null;
}

export default UserTemplate;
