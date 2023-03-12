import React from 'react'
import "./Admin.css"
import Logo from "../../assets/logo.jpg";

function Admin() {
  return (
    <div className='admin-container'>
      <div className="left-navbar">
        <div className="left-navbar-wrapper">
          <div className="left-navbar-logo">
          <img src={Logo} alt="logo" />
          </div>
          <div className="navigation">
            <div className="products">
              <p>Products</p>
            </div>
            <div className="users">
              <p>Users</p>
            </div>
            <div className="orders">
              <p>Orders</p>
            </div>
          </div>
          <div className="logout">
            <button className="btn">
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="admin-content">
        contents
      </div>
    </div>
  )
}

export default Admin