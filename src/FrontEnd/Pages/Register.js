import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_PATH } from '../../API_PATH';

function Register() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
  });
  const onChangeInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const [empThumb, setEmpThumb] = useState('');
  const onSelectThumb = (e) => {
    setEmpThumb(e.target.files[0]);
  };

  const createEmployee = async (info, thumb) => {
    const formData = new FormData();
    formData.append('info', JSON.stringify(info));
    formData.append('thumb', thumb);

    await axios
      .post(`${API_PATH}/register.php`, formData, {
        headers: { 'content-type': 'multipart/form-data' },
      })
      .then((res) => {
        if (res.data.success) {
          navigate('/login');
        }
        alert(res.data.msg);
        // console.log(res.data);
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    createEmployee(userInfo, empThumb);
    // console.log(userInfo);
    // console.log(empThumb);
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
            <div className="row mt-4 justify-content-center">
              <div className="col-8">
                <div className="card">
                  <div className="card-header bg-warning">
                    <h3 className="text-center">Registration Form</h3>
                  </div>
                  <form onSubmit={onSubmitForm}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group">
                            <label htmlFor="_fname">
                              <strong>First Name:</strong>
                            </label>
                            <input
                              type="text"
                              name="firstname"
                              onChange={onChangeInfo}
                              id="_fname"
                              className="form-control"
                              placeholder="Enter firstname"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label htmlFor="_lname">
                              <strong>Last Name:</strong>
                            </label>
                            <input
                              type="text"
                              name="lastname"
                              onChange={onChangeInfo}
                              id="_lname"
                              className="form-control"
                              placeholder="Enter lastname"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group my-3">
                            <label htmlFor="_email">
                              <strong>Email:</strong>
                            </label>
                            <input
                              type="text"
                              name="email"
                              onChange={onChangeInfo}
                              id="_email"
                              className="form-control"
                              placeholder="Enter email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group my-3">
                            <label htmlFor="_password">
                              <strong>Password:</strong>
                            </label>
                            <input
                              type="password"
                              name="password"
                              onChange={onChangeInfo}
                              id="_password"
                              className="form-control"
                              placeholder="Enter password"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="_thumb">
                          <strong>Profile Picture:</strong>
                        </label>
                        <input
                          type="file"
                          accept="image/**"
                          name="thumbnail"
                          onChange={onSelectThumb}
                          id="_thumb"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-between">
                        <div>
                          <span>Already a user?</span>
                          <Link to="/login" className="btn btn-outline-primary mx-3">
                            Login
                          </Link>
                        </div>
                        <input type="reset" className="btn btn-danger" />
                        <input
                          type="submit"
                          name="submit"
                          value="Register"
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

export default Register;
