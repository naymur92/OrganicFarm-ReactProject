import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function AdminHeader(props) {
  const { loginInfo, setLoginInfo } = props;
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    setLoginInfo([]);
    navigate('/');
  };

  return (
    <nav className="admin-navbar navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/logo/01.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/admin/">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="users">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="orders">
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="harvesting">
                Harvesting
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="reporting">
                Reporting
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>
        </div>
        <div className="float-end">
          <span className="gretting text-light mx-2">
            <strong>{`${loginInfo.firstname} ${loginInfo.lastname}`}</strong> - ({loginInfo.role})
          </span>
          <button className="btn btn-danger" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
