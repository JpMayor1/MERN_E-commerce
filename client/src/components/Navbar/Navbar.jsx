import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

function Navbar() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!token) {
    return (
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="navbar-links">
            <div className="navbar-link">
              <Link to="/register">Register</Link>
              <p>/</p>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="navbar-links">
          <div className="navbar-products">
            <Link to="/products">Products</Link>
          </div>
          <div className="navbar-cart">
            <AiOutlineShoppingCart />
            <span className="cart-number">0</span>
          </div>
          <div className="navbar-link" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

