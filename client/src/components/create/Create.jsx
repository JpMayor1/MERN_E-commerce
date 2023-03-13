import React, { useState, useEffect } from "react";
import List from "../List/List";
import "./Create.css";

function Create() {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const onChangeFile = (e) => {
        setImg(e.target.files[0]);
    };

    //CREATING PRODUCT
    const handleCreateProduct = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            let filename = null;

            if (img) {
                filename = Date.now() + img.name;
                formData.append("filename", filename);
                formData.append("img", img);

                await fetch(`http://localhost:5000/upload/img`, {
                    method: "POST",
                    body: formData,
                });

                // Display pop-up message and refresh the page
                alert("Image Created");
                window.location.reload();
            }

            // upload product
            await fetch("http://localhost:5000/product", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    title,
                    img: filename,
                    price,
                }),
            });
        } catch (error) {
            console.error(error);
        }
    };

    //GETTING THE PRODUCT
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch("http://localhost:5000/product");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                setError((prev) => error.message);
                console.log(error);
            }
        };
        fetchProduct()
    }, []);

    return (
        <div className="create-container">
            <div className="create-wrapper">
                <h2 className="title">Create Product</h2>
                <form
                    onSubmit={handleCreateProduct}
                    encType="multipart/form-data"
                >
                    <div className="input-wrapper">
                        <label>Title: </label>
                        <input
                            type="text"
                            name="title"
                            className="input"
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor="img">Image: </label>
                        <input
                            type="file"
                            name="img"
                            id="img"
                            className="input"
                            placeholder="Image"
                            onChange={onChangeFile}
                        />
                        <label>Price: </label>
                        <input
                            type="price"
                            name="price"
                            className="input"
                            placeholder="Price"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="btn-wrapper">
                        <button className="btn">Create Product</button>
                    </div>
                </form>
            </div>
            <div className="show-products">
                {!error && <List products={products ? products : []} />}
                {error && <h1>No products or server is not responding</h1>}
            </div>
        </div>
    );
}

export default Create;
