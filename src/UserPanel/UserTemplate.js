import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import useSessionStorage from '../hooks/useSessionStorage';

function UserTemplate() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);
  const pendingCheckout = JSON.parse(localStorage.getItem('pendingcheckout'));

  // console.log(typeof loginInfo);

  const authenticate = () => {
    if (!loginInfo?.id) {
      navigate('/login');
    } else if (loginInfo?.role === 'admin' || loginInfo?.role === 'manager') {
      navigate('/admin');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(pendingCheckout);
    if (pendingCheckout?.status === 'pending') {
      navigate('/checkout');
    }
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo]);

  return loginInfo?.id ? (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-3">
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
        <div className="col-sm-9">
          <Outlet />
        </div>
      </div>
    </div>
  ) : null;
}

export default UserTemplate;
