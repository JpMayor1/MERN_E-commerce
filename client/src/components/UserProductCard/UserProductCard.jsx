import React from "react";
import { Link } from "react-router-dom";
import './UserProductCard.css'

function UserProductCard({ product }) {
    return (
        <div className="product-container-list-card">
            <Link to={`/productDetail/${product._id}`} className="wrapper-link">
                <img
                    src={`http://localhost:5000/images/${product.img}`}
                    className="product-imagee"
                    alt="products"
                />
                <div className="product-info">
                    <h2 className="product-titlee">{product.title}</h2>
                    <span className="product-pricee">
                        <span>₱</span>
                        {Number(product.price).toFixed(2)}
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default UserProductCard;
