import React, { useState } from "react";
import "./Admin.css";
import Logo from "../../assets/logo.jpg";
import Create from "../../components/create/Create";
import Users from "../../components/Users/Users";
import Orders from "../../components/Orders/Orders";

function Admin() {
    const [create, setCreate] = useState(true);
    const [users, setUsers] = useState(false);
    const [orders, setOrders] = useState(false);

    const handleCreateModal = () => {
        setCreate(true);
        setUsers(false);
        setOrders(false);
    };

    const handleShowUsers = () => {
        setUsers(true);
        setCreate(false);
        setOrders(false);
    };

    const handleShowOrders = () => {
        setOrders(true);
        setUsers(false);
        setCreate(false);
    };
    return (
        <div className="admin-container">
            <div className="left-navbar">
                <div className="left-navbar-wrapper">
                    <div className="left-navbar-logo">
                        <img src={Logo} alt="logo" />
                        <hr />
                    </div>

                    <div className="navigation">
                        <div
                            className="products"
                            onClick={handleCreateModal}
                            tabIndex="0"
                        >
                            <p>Products</p>
                        </div>
                        <div
                            className="users"
                            onClick={handleShowUsers}
                            tabIndex="0"
                        >
                            <p>Users</p>
                        </div>
                        <div
                            className="orders"
                            onClick={handleShowOrders}
                            tabIndex="0"
                        >
                            <p>Orders</p>
                        </div>
                    </div>
                    <div className="logout">
                        <button className="btn">Logout</button>
                    </div>
                </div>
            </div>
            <div className="admin-content">
                {create && <Create />}
                {users && <Users />}
                {orders && <Orders />}
            </div>
        </div>
    );
}

export default Admin;
