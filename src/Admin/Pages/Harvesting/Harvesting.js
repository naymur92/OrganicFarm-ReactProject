/* eslint-disable eqeqeq */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { API_PATH } from '../../../API_PATH';
import DateTime from '../../../Components/DateTime';

function Harvesting() {
  const [loginInfo, setLoginInfo, users, changeUserStatus, changeEmpRole, products] =
    useOutletContext();

  const [harvests, setHarvests] = useState([]);
  const getHarvests = async () => {
    await axios.get(`${API_PATH}/harvests/harvests.php`).then((res) => {
      if (res.data.success) {
        setHarvests(res.data.harvests);
      }
    });
  };

  // search method
  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedItems = harvests.filter((item) =>
    item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Find distinc value
  const categories = [...new Set(products.map((product) => product.category))];
  // console.log(categories);
  const [prodCat, setProdCat] = useState('');
  const prodList = products.filter((prod) => prod.category === prodCat);

  // console.log(prodList);

  const [harvestInfo, setHarvestInfo] = useState([]);

  const handleChange = (e) => {
    setHarvestInfo({ ...harvestInfo, [e.target.name]: e.target.value });
  };

  const newHarvest = async (info, prodname, prodcat) => {
    await axios
      .post(`${API_PATH}/harvests/new_harvest.php`, { info, prodname, prodcat })
      .then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          document.getElementById('harvest_form').reset();
          getHarvests();
          setProdCat('');
        }
        // alert(res.data.msg);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // get product name
    const prodName = prodList.filter((item) => item.id === harvestInfo.product)[0].name;

    newHarvest(harvestInfo, prodName, prodCat);
  };

  const deleteHarvest = () => {
    //
  };

  useEffect(() => {
    getHarvests();
  }, []);

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
            <form onSubmit={handleSubmit} id="harvest_form">
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
                  <select
                    name="product"
                    onChange={handleChange}
                    id="_prodName"
                    className="form-control"
                    required
                  >
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
                    onChange={handleChange}
                    placeholder="Enter amount"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="_status">
                    <strong>Product Status:</strong>
                  </label>
                  <select
                    name="status"
                    onChange={handleChange}
                    id="_status"
                    className="form-control"
                    required
                  >
                    <option value="" selected hidden>
                      Select One
                    </option>
                    <option value="available">Available</option>
                    <option value="upcoming">Upcoming</option>
                  </select>
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
                    onChange={onSearch}
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
                    <th>Product Category</th>
                    <th>Amount</th>
                    <th>Collected On</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {searchedItems?.map((item, index) => (
                    <tr key={item.id.toString()} className="align-middle">
                      <td>{index + 1}</td>

                      <td>{item.product_name}</td>
                      <td>{item.product_category}</td>
                      <td>{item.amount}</td>

                      <td>
                        <DateTime time={item.harvest_time} />
                      </td>
                      <td>
                        <button type="button" className="btn btn-outline-danger">
                          <i className="fas fa-trash" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {searchedItems?.length === 0 ? (
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
