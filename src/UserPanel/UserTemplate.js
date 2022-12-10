import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../FrontEnd/Components/Footer';
import Header from '../FrontEnd/Components/Header';

function UserTemplate() {
  const navigate = useNavigate();
  const loginInfo = JSON.parse(sessionStorage.getItem('logininfo'));
  const authenticate = () => {
    if (!loginInfo) {
      navigate('/login');
    } else if (loginInfo?.role === 'admin' || loginInfo?.role === 'manager') {
      navigate('/admin');
    }
  };

  useEffect(() => {
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserTemplate;
