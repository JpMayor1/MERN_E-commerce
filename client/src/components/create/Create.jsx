import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Create.css";

function Create() {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState(0);
    const { token } = useSelector((state) => state.auth);

    const onChangeFile = (e) => {
        setImg(e.target.files[0]);
    };

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
            }

            // upload product and navigate to product
            await fetch("http://localhost:5000/product", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
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
        </div>
    );
}

export default Create;
