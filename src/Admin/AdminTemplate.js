import React from 'react';
import { Outlet } from 'react-router-dom';
import './AdminTemplate.css';
import AdminFooter from './Components/AdminFooter';
import AdminHeader from './Components/AdminHeader';

function AdminTemplate() {
  return (
    <div>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </div>
  );
}

export default AdminTemplate;
