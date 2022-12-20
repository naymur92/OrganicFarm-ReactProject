import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminTemplate from './Admin/AdminTemplate';
import Dashboard from './Admin/Pages/Dashboard/Dashboard';
import Harvesting from './Admin/Pages/Harvesting/Harvesting';
import Orders from './Admin/Pages/Orders/Orders';
import AddProduct from './Admin/Pages/Products/AddProduct';
import Products from './Admin/Pages/Products/Products';
import Reporting from './Admin/Pages/Reporting/Reporting';
import AddEmployee from './Admin/Pages/Users/AddEmployee';
import Users from './Admin/Pages/Users/Users';
import ViewUser from './Admin/Pages/Users/ViewUser';
import ScrollToTop from './Components/ScroolToTop';
import ErrorPage from './ErrorPage';
import FrontTemplate from './FrontEnd/FrontTemplate';
import About from './FrontEnd/Pages/About';
import Cart from './FrontEnd/Pages/Cart';
import Checkout from './FrontEnd/Pages/Checkout';
import Contact from './FrontEnd/Pages/Contact';
import Home from './FrontEnd/Pages/Home';
import Login from './FrontEnd/Pages/Login';
import Register from './FrontEnd/Pages/Register';
import Shop from './FrontEnd/Pages/Shop';
import ViewProduct from './FrontEnd/Pages/ViewProduct';
import UserTemplate from './UserPanel/UserTemplate';
import UserDashboard from './UserPanel/pages/UserDashboard';
import UserFavourites from './UserPanel/pages/UserFavourites';
import UserOrders from './UserPanel/pages/UserOrders';
import ViewUserOrder from './UserPanel/pages/ViewUserOrder';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FrontTemplate />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/view-product/:id" element={<ViewProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="user" element={<UserTemplate />}>
            <Route index element={<UserDashboard />} />
            <Route path="orders" element={<UserOrders />} />
            <Route path="orders/view-order/:id" element={<ViewUserOrder />} />
            <Route path="wishlists" element={<UserFavourites />} />
          </Route>
        </Route>
        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/view-user/:id" element={<ViewUser />} />
          <Route path="users/add-employee" element={<AddEmployee />} />
          <Route path="products" element={<Products />} />
          <Route path="products/addproduct" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/view-order/:id" element={<Orders />} />
          <Route path="harvesting" element={<Harvesting />} />
          <Route path="reporting" element={<Reporting />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
