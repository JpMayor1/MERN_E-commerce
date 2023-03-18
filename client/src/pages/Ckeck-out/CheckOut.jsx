import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsPaypal } from "react-icons/bs";
import "./Check-out.css";
import Gcash from "../../assets/G-cash.png";

function CheckOut() {
    const { address } = useSelector((state) => state.address);
    const { products } = useSelector((state) => state.cart);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

    function totalPriceProducts() {
        let totalPrice = 0;
        products.map(
            (product) => (totalPrice += product.price * product.quantity)
        );
        return totalPrice.toFixed(2);
    }

    function handlePaymentMethodChange(event) {
        setSelectedPaymentMethod(event.target.value);
    }

    return (
        <div className="check-out-container">
            <div className="check-out-wrapper">
                <div className="check-out-left">
                    <h3 className="check-out-left-title">Address Data</h3>
                    <div className="check-out-address-data">
                        {Object.entries(address).map(
                            ([property, value], index) => (
                                <div key={index} className="check-out-info">
                                    <h3>{property}:</h3>
                                    <span>{value}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="check-out-right">
                    <h3 className="check-out-right-title">Products</h3>
                    <div className="check-out-products">
                        {products.map((product) => (
                            <div className="product_id" key={product.id}>
                                <Link to={`/productDetail/${product.id}`}>
                                    <img
                                        src={`http://localhost:5000/images/${product.img}`}
                                        alt="imageproduct"
                                        className="check-out-image"
                                    />
                                </Link>
                                <div className="check-out-price-and-title">
                                    <p className="check-out-product-title">
                                        {product.title}
                                    </p>
                                    <span className="check-out-price">
                                        {product.quantity} x <span>₱</span>
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <span className="check-out-total-price-msg">
                        Total:
                        <div className="check-out-total-price">
                            ₱{totalPriceProducts()}
                        </div>
                    </span>
                    <div className="payment">
                        <p className="payment-select">
                            Select a payment method:
                        </p>
                        <div className="payment-methods">
                            <div className="cod-method">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="COD"
                                    id="cod"
                                    checked={selectedPaymentMethod === "COD"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <div className="cod">COD</div>
                            </div>
                            <div className="paypal-method">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="PayPal"
                                    id="paypal"
                                    checked={selectedPaymentMethod === "PayPal"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <BsPaypal className="paypal-icon" />
                            </div>
                            <div className="g-cash-method">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="GCash"
                                    id="gcash"
                                    checked={selectedPaymentMethod === "GCash"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <img src={Gcash} alt="gcash" />
                            </div>
                        </div>
                    </div>
                    <Link to="/successorder" className="check-out-order-btn">
                        Order
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
