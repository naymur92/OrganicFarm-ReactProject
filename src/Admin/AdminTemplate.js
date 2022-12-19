/* eslint-disable no-alert */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { API_PATH } from '../API_PATH';
import useSessionStorage from '../hooks/useSessionStorage';
import './AdminTemplate.css';
import AdminFooter from './Components/AdminFooter';
import AdminHeader from './Components/AdminHeader';

function AdminTemplate() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useSessionStorage('logininfo', []);

  // console.log(loginInfo);
  const authenticate = () => {
    if (!loginInfo?.id) {
      navigate('/login');
    }
    if (loginInfo?.role === 'user') {
      navigate('/user');
    }
  };

  // Users area
  const [users, setUsers] = useState([]);
  const allUsers = async () => {
    await axios.get(`${API_PATH}/users/users.php`).then((res) => {
      // console.log(res.data.users);
      setUsers(res.data.users);
    });
  };
  const changeUserStatus = async (id, status) => {
    await axios
      .put(`${API_PATH}/users/change_u_status.php`, { params: { id, status } })
      .then((res) => {
        if (res.data.success) {
          allUsers();
        }
        alert(res.data.msg);
      });
  };
  const changeEmpRole = async (id, role) => {
    await axios
      .put(`${API_PATH}/users/change_emp_role.php`, { params: { id, role } })
      .then((res) => {
        if (res.data.success) {
          allUsers();
        }
        alert(res.data.msg);
      });
  };

  // Product area
  const [products, setProducts] = useState([]);

  // Get all products
  const allProducts = async () => {
    await axios.get(`${API_PATH}/products/products.php`).then((res) => {
      // console.log(res.data.products);
      setProducts(res.data.products);
    });
  };

  // Change Status of products
  const changeStatus = async (id, status) => {
    await axios
      .put(`${API_PATH}/products/change_p_status.php`, {
        params: {
          id,
          status,
        },
      })
      .then((res) => {
        if (res.data.success) {
          allProducts();
        }
        alert(res.data.msg);
      });
  };

  // Delete product
  const delProd = async (id) => {
    await axios
      .put(`${API_PATH}/products/delete_product.php`, {
        params: { id },
      })
      .then((res) => {
        if (res.data.success) {
          allProducts();
        }
        alert(res.data.msg);
      });
  };

  const [orders, setOrders] = useState([]);
  // Get Orders
  const getOrders = async () => {
    await axios.get(`${API_PATH}/orders/orders.php`).then((res) => {
      if (res.data.success) {
        setOrders(res.data.orders);
      }
    });
  };

  // Cancel order (here prodlist for update product stock)
  const cancelOrder = async (orderid, prodlist) => {
    await axios
      .put(`${API_PATH}/orders/cancel_order.php`, {
        id: orderid,
        products: prodlist,
      })
      .then((res) => {
        if (res.data.success) {
          alert(res.data.msg);
          getOrders();
        }
      });
  };

  useEffect(() => {
    authenticate();
    allUsers();
    allProducts();
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInfo]);

  return loginInfo?.id ? (
    <>
      <AdminHeader loginInfo={loginInfo} setLoginInfo={setLoginInfo} />
      <Outlet
        context={[
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
        ]}
      />
      <AdminFooter />
    </>
  ) : null;
}

export default AdminTemplate;
