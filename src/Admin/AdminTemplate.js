import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './AdminTemplate.css';
import AdminFooter from './Components/AdminFooter';
import AdminHeader from './Components/AdminHeader';

function AdminTemplate() {
  const navigate = useNavigate();
  const loginInfo = JSON.parse(sessionStorage.getItem('logininfo'));
  const authenticate = () => {
    if (!loginInfo) {
      navigate('/login');
    } else if (loginInfo?.role === 'user') {
      navigate('/user');
    }
  };

  useEffect(() => {
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </div>
  );
}

export default AdminTemplate;
