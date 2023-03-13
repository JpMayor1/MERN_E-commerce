import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
    return (
        <div className="product-container">
            <div className="wrapper">
                <img
                    src={`http://localhost:5000/images/${product.img}`}
                    className="product-image"
                    alt="products"
                />
                <div className="product-info">
                    <h2 className="product-title">{product.title}</h2>
                    <span className="product-price">
                        <span>₱</span>
                        {Number(product.price).toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
