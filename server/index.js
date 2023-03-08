const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");

const app = express();

//DB CONNECTIONS:
mongoose
    .connect(process.env.MONGO_URL, {
        serverSelectionTimeoutMS: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    })
    .then(() => {
        console.log("DB is successfully connected");
    })
    .catch((err) => {
        console.log("Error connecting to DB:", err);
    });

//MIDDLEWARE:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES:
app.use("/auth", authController);
app.use("/product", productController);
app.use("/upload", uploadController);

app.listen(process.env.PORT, () =>
    console.log(`listening on port ${process.env.PORT}`)
);
