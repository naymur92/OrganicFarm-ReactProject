import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { API_PATH } from '../../API_PATH';

function Login() {
  const navigate = useNavigate();
  const [
    products,
    cartItems,
    onAdd,
    onRemove,
    onEmpty,
    itemsPrice,
    totalPrice,
    shippingCharge,
    updateShippingCharge,
    setCartItems,
    loginInfo,
    setLoginInfo,
  ] = useOutletContext();

  const authenticate = () => {
    if (loginInfo?.role === 'admin' || loginInfo?.role === 'manager') {
      navigate('/admin/');
    } else if (loginInfo?.role === 'user') {
      navigate('/user/');
    }
    // console.log(loginInfo);
  };

  useEffect(() => {
    document.getElementsByClassName('contact-section')[0].scrollIntoView();
    authenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo]);

  const [userInfo, setuserInfo] = useState({});

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    // console.log(userInfo);

    await axios.get(`${API_PATH}/login.php`, { params: userInfo }).then((res) => {
      if (res.data.success) {
        setLoginInfo(res.data.logininfo);
      }
      alert(res.data.msg);
      // console.log(res.data);
    });
  };

  return (
    <>
      {/* <!-- Page Header Section Start Here --> */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay" />
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">Login</h4>
            <ul className="agri-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="login" className="active">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Page Header Section Ending Here --> */}

      {/* <!-- Login Page Section Start Here --> */}
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="contac-top">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-12">
                <div className="card">
                  <div className="card-header bg-warning">
                    <h3 className="text-center">Login Form</h3>
                  </div>
                  <form onSubmit={submitForm}>
                    <div className="card-body">
                      <div className="form-group my-2">
                        <label htmlFor="_email">
                          <strong>Email:</strong>
                        </label>
                        <input
                          type="email"
                          id="_email"
                          name="email"
                          onChange={onChangeValue}
                          placeholder="Enter Email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group my-2">
                        <label htmlFor="_password">
                          <strong>Password:</strong>
                        </label>
                        <input
                          type="password"
                          id="_password"
                          name="password"
                          onChange={onChangeValue}
                          placeholder="Enter Password"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-between">
                        <div>
                          <span className="text-warning">Not a user? </span>
                          <Link to="/register" className="btn btn-outline-primary">
                            Sign Up Now
                          </Link>
                        </div>

                        <input
                          type="submit"
                          name="submit"
                          value="LOGIN"
                          className="btn btn-warning"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Login Page Section ENding Here --> */}
    </>
  );
}

export default Login;
