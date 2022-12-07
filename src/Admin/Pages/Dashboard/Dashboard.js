import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Dashboard.css';

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">Dashboard</h1>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header bg-primary">
              <h3 className="text-light">Left Bar</h3>
            </div>
            <div className="card-body minheight">
              <ul className="menu">
                <li>
                  <NavLink to="employees" className="left-menu btn btn-outline-primary">
                    Employees
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
        <div className="col-9">
          {/* <!-- Content Area --> */}
          <div className="dashboard-widget">
            <div className="row">
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">23</div>
                <button className="btn btn-outline-warning widget-text">Widget Item</button>
              </div>
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">23</div>
                <button className="btn btn-outline-warning widget-text">Widget Item</button>
              </div>
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">23</div>
                <button className="btn btn-outline-warning widget-text">Widget Item</button>
              </div>
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">23</div>
                <button className="btn btn-outline-warning widget-text">Widget Item</button>
              </div>
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">23</div>
                <button className="btn btn-outline-warning widget-text">Widget Item</button>
              </div>
              <div className="col-3 m-2 p-1 text-center single-widget">
                <div className="widget-header">23</div>
                <button className="btn btn-outline-warning widget-text">Widget Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
