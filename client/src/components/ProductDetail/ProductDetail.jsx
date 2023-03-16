import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsCartFill } from "react-icons/bs";
import { addProduct } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

function ProductDetail() {
    const [product, setProduct] = useState({});
    const [quantityProduct, setQuantityProduct] = useState(1);
    const [currentImg, setCurrentImg] = useState("");
    const dispatch = useDispatch();
    const { id } = useParams();
    const { products } = useSelector((state) => state.cart);

    console.log(products);
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
    const addQuantity = () => {
        setQuantityProduct((prev) => prev + 1);
    };
    const removeQuantity = () => {
        setQuantityProduct((prev) => (prev === 1 ? 1 : prev - 1));
    };

    const addProductToCart = () => {
        dispatch(
            addProduct({
                quantity: quantityProduct,
                title: product.title,
                price: product.price,
                id: product._id,
                img: product.img,
            })
        );
        toast.success("Product added", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

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
                        <button className="minusBtn" onClick={removeQuantity}>
                            -
                        </button>
                        <span className="quantitynumber">
                            Quantity: <span>{quantityProduct}</span>
                        </span>
                        <button className="plusBtn" onClick={addQuantity}>
                            +
                        </button>
                    </div>
                    <div className="addtocart" onClick={addProductToCart}>
                        <BsCartFill className="cart-icon" />
                        Add to Cart
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ProductDetail;
