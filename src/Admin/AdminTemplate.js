import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useSessionStorage from '../hooks/useSessionStorage';
import './AdminTemplate.css';
import AdminFooter from './Components/AdminFooter';
import AdminHeader from './Components/AdminHeader';

function AdminTemplate({ API_PATH }) {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);
  // console.log(loginInfo);
  const authenticate = () => {
    if (!loginInfo?.id) {
      navigate('/login');
    }
    if (loginInfo?.role === 'user') {
      navigate('/user');
    }
  };

  useEffect(() => {
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo]);

  return loginInfo?.id ? (
    <>
      <AdminHeader loginInfo={loginInfo} setLoginInfo={setLoginInfo} />
      <Outlet context={[API_PATH, loginInfo, setLoginInfo]} />
      <AdminFooter />
    </>
  ) : null;
}

export default AdminTemplate;
