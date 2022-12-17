import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

function AddProduct() {
  const [API_PATH] = useOutletContext();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    status: '',
    thumbnail: '',
    stock: '',
  });

  const onChangeValue = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = (event) => {
    event.preventDefault();
    // console.log(product);
    axios
      .post(`${API_PATH}/products/addproduct.php`, {
        product,
      })
      .then((res) => {
        if (res.data.success) {
          navigate('/admin/products');
        }
        alert(res.data.msg);
        // console.log(res.data);
      });
  };

  return (
    <div className="container-fluid cleartop">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">Product Add</h1>
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-8">
          <div className="card">
            <div className="card-header bg-warning">
              <h3 className="text-center">Product Entry Form</h3>
            </div>
            <div className="card-body minheight">
              <form onSubmit={submitData}>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="_name">
                        <strong>Product Name:</strong>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="_name"
                        onChange={onChangeValue}
                        className="form-control"
                        placeholder="Enter Product Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="_price">
                        <strong>Product Price:</strong>
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="_price"
                        onChange={onChangeValue}
                        className="form-control"
                        placeholder="Enter Product Price"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group my-3">
                  <label htmlFor="_desc">
                    <strong>Product Description:</strong>
                  </label>
                  <textarea
                    name="description"
                    id="_desc"
                    onChange={onChangeValue}
                    className="form-control"
                    placeholder="Enter Product Details"
                  />
                </div>
                <div className="row my-3">
                  <div className="col-6">
                    <label htmlFor="_cat">
                      <strong>Category:</strong>
                    </label>
                    <select
                      name="category"
                      id="_cat"
                      onChange={onChangeValue}
                      className="form-control"
                      required
                    >
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
                    <select
                      name="status"
                      id="_status"
                      onChange={onChangeValue}
                      className="form-control"
                    >
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
                        onChange={onChangeValue}
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
                        onChange={onChangeValue}
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

export default AddProduct;
