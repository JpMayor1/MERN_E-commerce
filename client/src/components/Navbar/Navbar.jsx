import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
                <div className="navbar-links">
                    <div className="navbar-products">
                        <Link to="/products">Products</Link>
                    </div>
                    <div className="navbar-cart">
                        <AiOutlineShoppingCart/>
                        <span className="cart-number">0</span>
                    </div>
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

export default Navbar;
