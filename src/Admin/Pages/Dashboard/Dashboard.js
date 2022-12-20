import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { API_PATH } from '../../../API_PATH';
// import './Dashboard.css';

function Dashboard() {
  const [loginInfo, setLoginInfo] = useOutletContext();
  const [widgetData, setWidgetData] = useState([]);

  const getWidgetData = async () => {
    await axios.get(`${API_PATH}/widget_data.php`).then((res) => {
      setWidgetData(res.data);
    });
  };
  useEffect(() => {
    // window.scrollTo(0, 0);
    getWidgetData();
    localStorage.removeItem('cart-items');
    localStorage.removeItem('pendingcheckout');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid cleartop">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <div className="gretting mt-3 float-end">
              Welcome, <strong>{`${loginInfo.firstname} ${loginInfo.lastname}`}</strong>
            </div>
            <h1 className="display-5 fw-bold text-light">Dashboard</h1>
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
                  <NavLink to="users" className="left-menu btn btn-outline-primary">
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="products" className="left-menu btn btn-outline-primary">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="bookings" className="left-menu btn btn-outline-primary">
                    Bookings
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-9 col-md-10">
          {/* <!-- Content Area --> */}
          <div className="dashboard-widget">
            <div className="row d-flex justify-content-between mx-4">
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">{widgetData.users}</div>
                <button className="btn btn-outline-warning widget-text">Users</button>
              </div>
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">{widgetData.employees}</div>
                <button className="btn btn-outline-warning widget-text">Employees</button>
              </div>
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">{widgetData.products}</div>
                <button className="btn btn-outline-warning widget-text">Products</button>
              </div>
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">{widgetData.total_sale}</div>
                <button className="btn btn-outline-warning widget-text">Total Sale</button>
              </div>
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">{widgetData.total_harvest}</div>
                <button className="btn btn-outline-warning widget-text">Total Harvest</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
