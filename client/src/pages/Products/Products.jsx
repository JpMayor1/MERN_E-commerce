import React, { useState, useEffect } from "react";
import UserList from "../../components/UserList/UserList";
import "./Products.css";

function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);

    //GETTING THE PRODUCT
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch("https://d-and-j-diner.onrender.com/product");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                setError((prev) => error.message);
                console.log(error);
            }
        };
        fetchProduct();
    }, []);

    if (!token) {
        return (
            <div className="not-authorized">
                <h2>Not Authorized, Please Login</h2>
            </div>
        );
    } else {
        return (
            <div className="show-user-products">
                {!error && <UserList products={products ? products : []} />}
                {error && <h1>No products or server is not responding</h1>}
            </div>
        );
    }
}

export default Products;
