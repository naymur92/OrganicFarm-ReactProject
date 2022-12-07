import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Search from './Components/Search';
// import Search from './Components/Search';

function FrontTemplate() {
  return (
    <>
      {/* <!-- preloader start here --> */}
      {/* <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span />
            <span />
          </div>
        </div>
      </div> */}
      {/* <!-- preloader ending here --> */}
      <Search />
      <Header />
      {/* <Search /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default FrontTemplate;
