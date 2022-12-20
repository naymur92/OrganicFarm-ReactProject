import React from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import DateTime from '../../../Components/DateTime';

function ViewUser() {
  const [
    loginInfo,
    setLoginInfo,
    users,
    changeUserStatus,
    changeEmpRole,
    products,
    changeStatus,
    delProd,
    orders,
    cancelOrder,
  ] = useOutletContext();
  const params = useParams();

  // eslint-disable-next-line eqeqeq
  const user = users.filter((x) => x.id == params.id)[0];
  // console.log(user);
  return (
    <div className="container-fluid cleartop">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">User Area</h1>
          </div>
        </div>
        <div className="col-sm-6 col-md-8">
          {/* <!-- Content Area --> */}
          <div className="card mt-2">
            <div className="card-header bg-warning">
              <h3 className="text-center">
                {user.firstname} {user.lastname}
                <Link to="/admin/users/" className="btn btn-outline-success float-end mt-2">
                  Back
                </Link>
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="row p-4">
                    <div className="col-4">
                      <strong>Email:</strong>
                    </div>
                    <div className="col-8">{user.email}</div>
                  </div>
                  <div className="row p-4">
                    <div className="col-4">
                      <strong>Role:</strong>
                    </div>
                    <div className="col-8">{user.role}</div>
                  </div>
                  <div className="row p-4">
                    <div className="col-4">
                      <strong>Status:</strong>
                    </div>
                    <div className="col-8">{user.status}</div>
                  </div>
                  <div className="row p-4">
                    <div className="col-4">
                      <strong>Creation Time:</strong>
                    </div>
                    <div className="col-8">
                      <DateTime time={user.creation_time} />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  {user.thumbnail !== '' ? (
                    <img
                      src={`/assets/images/users/${user.thumbnail}`}
                      className="img-thumbnail float-end"
                      style={{ width: '280px' }}
                      alt=""
                    />
                  ) : (
                    <span>No Picture</span>
                  )}
                </div>
              </div>
            </div>
            <div className="card-footer">
              {user.role !== 'admin' && user.status !== 'muted' && user.status !== 'blocked' ? (
                <Link
                  to={`/admin/users/edit-user/${user.id}`}
                  className="mx-2 btn btn-outline-success"
                >
                  <i className="fas fa-pen" /> Edit
                </Link>
              ) : null}

              {/* Conditional part */}
              {user.status === 'pending' ? (
                <>
                  <button
                    type="button"
                    onClick={() => changeUserStatus(user.id, 'active')}
                    className="mx-2 btn btn-outline-primary"
                  >
                    <i className="fas fa-check" /> Active
                  </button>

                  {user.status !== 'pending' ? (
                    <button
                      type="button"
                      onClick={() => changeUserStatus(user.id, 'blocked')}
                      className="mx-2 btn btn-outline-danger"
                    >
                      <i className="fas fa-times" /> Block User
                    </button>
                  ) : null}
                </>
              ) : null}
              {user.role === 'user' && user.status === 'active' ? (
                <button
                  type="button"
                  onClick={() => changeUserStatus(user.id, 'muted')}
                  className="mx-2 btn btn-outline-danger"
                >
                  <i className="fas fa-ban" /> Mute User
                </button>
              ) : null}
              {user.role === 'employee' ? (
                <>
                  <button
                    type="button"
                    onClick={() => changeEmpRole(user.id, 'manager')}
                    className="mx-2 btn btn-outline-success"
                  >
                    <i className="fas fa-check" /> Promote to Manager
                  </button>

                  <button
                    type="button"
                    onClick={() => changeUserStatus(user.id, 'closed')}
                    className="mx-2 btn btn-outline-danger"
                  >
                    <i className="fas fa-times" /> Close Employee
                  </button>
                </>
              ) : null}
              {user.role === 'manager' ? (
                <button
                  type="button"
                  onClick={() => changeEmpRole(user.id, 'employee')}
                  className="mx-2 btn btn-outline-warning"
                >
                  <i className="fas fa-arrow-down" /> Demote to Employee
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
