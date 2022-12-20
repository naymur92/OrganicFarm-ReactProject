import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { API_PATH } from '../../../API_PATH';
import DateTime from '../../../Components/DateTime';

function Harvesting() {
  const [loginInfo, setLoginInfo, users, changeUserStatus, changeEmpRole, products] =
    useOutletContext();
  const categories = [...new Set(products.map((product) => product.category))];
  // console.log(categories);

  const [harvests, setHarvests] = useState([]);
  const getOrders = async () => {
    await axios.get(`${API_PATH}/harvests/harvests.php`).then((res) => {
      if (res.data.success) {
        setHarvests(res.data.harvests);
      }
    });
  };

  const [prodCat, setProdCat] = useState('');
  const prodList = products.filter((prod) => prod.category === prodCat);

  const [harvestInfo, setHarvestInfo] = useState([]);
  useEffect(() => {
    getOrders();
  });

  return (
    <div className="container-fluid cleartop">
      <div className="row ">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">Harvest Management</h1>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="card mt-2">
            <div className="card-header bg-primary">
              <h3 className="text-light text-center">New Harvest</h3>
            </div>
            <form>
              <div className="card-body">
                <div className="form-group my-2">
                  <label htmlFor="_category">
                    <strong>Select Category:</strong>
                  </label>
                  <select
                    name="category"
                    onChange={(e) => setProdCat(e.target.value)}
                    id=""
                    className="form-control"
                    required
                  >
                    <option value="" selected hidden>
                      Select One
                    </option>
                    {categories.map((cat) => (
                      <option value={cat}>{cat.toUpperCase()}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group my-2">
                  <label htmlFor="_prodName">
                    <strong>Select Product</strong>
                  </label>
                  <select name="product" id="_prodName" className="form-control" required>
                    <option value="" selected hidden>
                      Select One
                    </option>
                    {prodList.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group my-2">
                  <label htmlFor="_amount">
                    <strong>Enter Amount:</strong>
                  </label>
                  <input
                    type="number"
                    name="amount"
                    placeholder="Enter amount"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <input type="reset" onClick={() => setProdCat('')} className="btn btn-danger" />
                <input
                  type="submit"
                  name="submit"
                  value="Submit Harvest"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm-9 col-md-9">
          {/* <!-- Content Area --> */}
          <div className="card mt-2">
            <div className="card-header bg-warning">
              <div className="row justify-content-end">
                <div className="col-sm-6 col-md-7 col-lg-8">
                  <h5 className="text-light pt-1">Harvest Lists</h5>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 search-box">
                  <label htmlFor="_search">
                    <strong>Search here:</strong>
                  </label>
                  <input
                    type="text"
                    name="search"
                    id="_search"
                    className="form-control"
                    placeholder="Enter product name"
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Product Name</th>
                    <th>Amount</th>
                    <th>Collected On</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {harvests?.map((user, index) => (
                    <tr key={user.id.toString()} className="align-middle">
                      <td>{index + 1}</td>

                      <td>name</td>
                      <td>amount</td>

                      <td>
                        <DateTime time={user.creation_time} />
                      </td>
                      <td>
                        <button type="button" className="dropdown-item">
                          <i className="fas fa-trash text-danger" /> Delete Harvest
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {harvests?.length === 0 ? (
                <div className="alert alert-warning text-center">
                  <strong>No Data</strong>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Harvesting;
