import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { BsCartFill } from "react-icons/bs";

function ProductDetail() {
    const [product, setProduct] = useState({});
    // const [quantity, setQuantity] = useState(null);
    const [currentImg, setCurrentImg] = useState("");
    // const dispatch = useDispatch();
    const {id} = useParams();

    console.log(product);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`http://localhost:5000/product/${id}`);
                const data = await res.json();
                setProduct(data);
                setCurrentImg(data.img);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchProducts();
    }, [id]);
    console.log(product);
    return (
        <div className="product-detail-container">
            <div className="product-detail-wrapper">
                <div className="left">
                    <div className="image-container">
                        <img
                            src={`http://localhost:5000/images/${currentImg}`}
                            alt="img"
                            className="main-img"
                        />
                    </div>
                </div>
                <div className="right">
                    <h2 className="title">{product?.title}</h2>
                    <p className="price">₱ {product?.price}</p>
                    <div className="quantity">
                        <button className="minusBtn" onClick={() => {}}>
                            -
                        </button>
                        <span className="quantitynumber">Quantity: <span>0</span></span>
                        <button className="plusBtn" onClick={() => {}}>
                            +
                        </button>
                    </div>
                    <div className="addtocart" onClick={() => {}}>
                        <BsCartFill className="cart-icon" />
                        Add to Cart
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
