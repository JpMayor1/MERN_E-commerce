const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authController");

const app = express();

//DB CONNECTIONS:
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB is successfully connected"))
    .catch((err) => console.log(err));

//MIDDLEWARE:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES:
app.use("/auth", authController);

app.listen(process.env.PORT, () =>
    console.log(`listening on port ${process.env.PORT}`)
);