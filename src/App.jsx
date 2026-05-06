import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Products from "./pages/admin/Products";
import Sales from "./pages/admin/Sales";
import Customer from "./pages/admin/Customer";
import Supplier from "./pages/admin/Supplier";
import Dashboard from "./pages/admin/Dashboard";
import Order from "./pages/user/userOrder";
import Product from "./pages/user/userProduct";
import image from "./assets/image.png";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const logout = () => {
    setIsLoggedIn(false);
    setRole("");
  };

  const [products, setProducts] = useState([
    { id: 0, name: "sugar", price: 190, stock: 50 },
    { id: 1, name: "rice", price: 200, stock: 20 },
  ]);

  return (
    <>
      <nav className="top-nav">
        <Link to="/" className="logo-Link">
          <img src={image} alt="logo" />
        </Link>

        <div className="nav-links">
          {!isLoggedIn && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          {/* ADMIN ONLY LINKS */}
          {role === "admin" && isLoggedIn && (
            <>
              <Link to="/admin/dashboard">Dashboard</Link>
              <Link to="/admin/products">Products</Link>
              <Link to="/admin/sales">Sales</Link>
              <Link to="/admin/supplier">Supplier</Link>
              <Link to="/admin/customer">Customer</Link>
            </>
          )}
          {isLoggedIn && role === "user" && (
            <>
              <Link to="/user/order">Order</Link>
              <Link to="/user/product">Product</Link>
            </>
          )}

          {isLoggedIn && (
            <button onClick={logout} className="logout-btn">
              logout
            </button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />}
        />
        <Route path="/register" element={<Register />} />

        <Route
          path="/admin/dashboard"
          element={
            isLoggedIn && role === "admin" ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/products"
          element={
            isLoggedIn && role === "admin" ? (
              <Products products={products} setProducts={setProducts} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/admin/sales"
          element={
            isLoggedIn && role === "admin" ? (
              <Sales products={products} setProducts={setProducts} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/supplier"
          element={
            isLoggedIn && role === "admin" ? (
              <Supplier />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/customer"
          element={
            isLoggedIn && role === "admin" ? (
              <Customer />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/user/order"
          element={
            isLoggedIn && role === "user" ? <Order /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/user/product"
          element={
            isLoggedIn && role === "user" ? (
              <Product />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
