import React from "react";
import "./SuccessOrder.css";
import { useSelector } from "react-redux";

function SuccessOrder() {
    const { address } = useSelector((state) => state.address);
    const { products } = useSelector((state) => state.cart);
    const { payment } = useSelector((state) => state.payment);
    console.log(payment);

    function totalPriceProducts() {
        let totalPrice = 0;
        products.map(
            (product) => (totalPrice += product.price * product.quantity)
        );
        return totalPrice.toFixed(2);
    }

    return (
        <div className="success-order-container">
            <div className="success-order-wrapper">
                <h2 className="success-order-title">
                    You have Successfully made an Order!
                </h2>
                <form>
                    <h3 className="success-order-info">Order Information's</h3>
                    <div className="success-order-address-data">
                        {Object.entries(address).map(
                            ([property, value], index) => (
                                <div key={index} className="check-out-info">
                                    <h3>{property}:</h3>
                                    <i>{value}</i>
                                </div>
                            )
                        )}
                    </div>
                    <div className="success-order-products-info">
                        {products.map((product) => (
                            <div className="product_id" key={product.id}>
                                <div className="success-order-price-and-title">
                                    <p className="success-order-product-title">
                                        {product.title}
                                    </p>
                                    <span className="success-order-price">
                                        {product.quantity} x <span>₱</span>
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="chosen-payment-method">{payment}</div>
                    <div className="success-order-price-msg">
                        Total: ₱{totalPriceProducts()}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SuccessOrder;
