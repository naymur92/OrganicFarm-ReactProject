import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import useSessionStorage from '../hooks/useSessionStorage';

function UserTemplate() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);
  const [pendingCheckout, setPendingCheckout] = useLocalStorage('pendingcheckout', []);

  // console.log(typeof loginInfo);

  const authenticate = () => {
    if (!loginInfo?.id) {
      navigate('/login');
    } else if (loginInfo?.role === 'admin' || loginInfo?.role === 'manager') {
      navigate('/admin');
    }
  };

  useEffect(() => {
    if (pendingCheckout?.status === 'pending') {
      navigate('/checkout');
    }
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo]);

  return loginInfo?.id ? (
    <>
      <h1>User Template</h1>
      <p>lorem</p>
    </>
  ) : null;
}

export default UserTemplate;
