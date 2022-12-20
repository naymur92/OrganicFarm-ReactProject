import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_PATH } from '../../../API_PATH';

function AddEmployee() {
  const navigate = useNavigate();
  const [empInfo, setEmpInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
  });
  const onChangeInfo = (e) => {
    setEmpInfo({ ...empInfo, [e.target.name]: e.target.value });
  };

  const [empThumb, setEmpThumb] = useState('');
  const onSelectThumb = (e) => {
    setEmpThumb(e.target.files[0]);
  };

  const createEmployee = async (empinfo, empthumb) => {
    const formData = new FormData();
    formData.append('info', JSON.stringify(empinfo));
    formData.append('thumb', empthumb);

    await axios
      .post(`${API_PATH}/register.php`, formData, {
        headers: { 'content-type': 'multipart/form-data' },
      })
      .then((res) => {
        if (res.data.success) {
          navigate('/admin/users/');
        }
        alert(res.data.msg);
        // console.log(res.data);
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    createEmployee(empInfo, empThumb);
    // console.log(empInfo);
    // console.log(empThumb);
  };
  return (
    <div className="container-fluid cleartop">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">Employee Add</h1>
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-header bg-warning">
              <h3 className="text-center">Employee Adding Form</h3>
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
                        <strong>Employee Email:</strong>
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
                        <strong>Employee Password:</strong>
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

                <div className="row my-3">
                  <div className="col-6">
                    <label htmlFor="_role">
                      <strong>Position:</strong>
                    </label>
                    <select
                      name="role"
                      onChange={onChangeInfo}
                      id="_role"
                      className="form-control"
                      required
                    >
                      <option value="" disabled selected>
                        Select One
                      </option>
                      <option value="manager">Manager</option>
                      <option value="employee">Employee</option>
                    </select>
                  </div>
                  <div className="col-6">
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
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <Link to="../users" className="btn btn-outline-warning">
                    Cancel
                  </Link>
                  <input type="reset" className="btn btn-danger" />
                  <input
                    type="submit"
                    name="submit"
                    value="Add Employee"
                    className="btn btn-success"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
