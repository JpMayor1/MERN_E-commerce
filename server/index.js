const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const WebSocket = require("ws");

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

// CREATE A WEBSOCKET SERVER
const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on("connection", function connection(ws) {
    console.log("Client connected");

    ws.on("message", function incoming(message) {
        console.log("received: %s", message);
    });

    ws.on("close", function close() {
        console.log("Client disconnected");
    });
});

app.listen(process.env.PORT, () =>
    console.log(`listening on port ${process.env.PORT}`)
);
