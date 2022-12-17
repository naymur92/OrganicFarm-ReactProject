import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

function Register() {
  const [API_PATH] = useOutletContext();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    document.getElementsByClassName('contact-section')[0].scrollIntoView();
  }, []);

  const onChangeValue = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    await axios.post(`${API_PATH}/register.php`, userInfo).then((res) => {
      if (res.data.success) {
        navigate('/login');
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
            <h4 className="ph-title">Register</h4>
            <ul className="agri-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="register" className="active">
                  Register
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
                    <h3 className="text-center">Registration Form</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={submitForm} method="POST">
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group my-2">
                            <label htmlFor="_fname">
                              <strong>First Name:</strong>
                            </label>
                            <input
                              type="text"
                              id="_fname"
                              name="firstname"
                              onChange={onChangeValue}
                              placeholder="Enter firstname"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group my-2">
                            <label htmlFor="_lname">
                              <strong>Last Name:</strong>
                            </label>
                            <input
                              type="text"
                              id="_lname"
                              name="lasttname"
                              onChange={onChangeValue}
                              placeholder="Enter lastname"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

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
                          required
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
                          required
                        />
                      </div>
                      <input
                        type="submit"
                        name="submit"
                        value="Register"
                        className="btn btn-warning"
                      />
                    </form>
                  </div>
                  <div className="card-footer">
                    <span className="text-warning">Already a user? </span>
                    <Link to="/login" className="btn btn-outline-warning">
                      Login Now
                    </Link>
                  </div>
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

export default Register;
