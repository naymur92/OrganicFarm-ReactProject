import React from 'react';
import { Link } from 'react-router-dom';

function AddEmployee() {
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
            <div className="card-body minheight">
              <form>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="_fname">
                        <strong>First Name:</strong>
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="_fname"
                        className="form-control"
                        placeholder="Enter Firstname"
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
                        id="_lname"
                        className="form-control"
                        placeholder="Enter Lastname"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group my-3">
                  <label htmlFor="_email">
                    <strong>Employee Email:</strong>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="_email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="row my-3">
                  <div className="col-6">
                    <label htmlFor="_cat">
                      <strong>Category:</strong>
                    </label>
                    <select name="category" id="_cat" className="form-control" required>
                      <option value="" disabled selected>
                        Select One
                      </option>
                      <option value="vegetable">Vegetable</option>
                      <option value="fruit">Fruit</option>
                      <option value="honey">Honey</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="_status">
                      <strong>Status:</strong>
                    </label>
                    <select name="status" id="_status" className="form-control">
                      <option value="" disabled selected>
                        Select One
                      </option>
                      <option value="available">Available</option>
                      <option value="unavailable">Unavailable</option>
                      <option value="upcoming">Upcoming</option>
                    </select>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="_thumb">
                        <strong>Thumbnail:</strong>
                      </label>
                      <input
                        type="file"
                        accept="image/**"
                        name="thumbnail"
                        id="_thumb"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="_stock">
                        <strong>Product Stock:</strong>
                      </label>
                      <input
                        type="stock"
                        name="stock"
                        id="_stock"
                        className="form-control"
                        placeholder="Enter Product Stock"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <input
                    type="submit"
                    name="submit"
                    value="Add Product"
                    className="btn btn-success"
                  />
                  <input type="reset" className="btn btn-danger" />
                  <Link to="../products" className="btn btn-outline-warning">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
