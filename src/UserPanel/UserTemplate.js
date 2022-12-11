import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return loginInfo ? (
    <>
      <h1>User Template</h1>
      <p>lorem</p>
    </>
  ) : null;
}

export default UserTemplate;
