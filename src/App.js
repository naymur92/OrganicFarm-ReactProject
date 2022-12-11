import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminTemplate from './Admin/AdminTemplate';
import AddProduct from './Admin/Pages/AddProduct';
import Dashboard from './Admin/Pages/Dashboard/Dashboard';
import Products from './Admin/Pages/Products/Products';
import ErrorPage from './ErrorPage';
import FrontTemplate from './FrontEnd/FrontTemplate';
import About from './FrontEnd/Pages/About';
import Cart from './FrontEnd/Pages/Cart';
import Contact from './FrontEnd/Pages/Contact';
import Home from './FrontEnd/Pages/Home';
import Login from './FrontEnd/Pages/Login';
import Register from './FrontEnd/Pages/Register';
import Shop from './FrontEnd/Pages/Shop';
import ViewProduct from './FrontEnd/Pages/ViewProduct';
import UserTemplate from './UserPanel/UserTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontTemplate />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop/view-product/:id" element={<ViewProduct />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="user" element={<UserTemplate />} />
        </Route>
        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/addproduct" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
