const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = require("express").Router();

const createToken = (user) => {
    const payload = {
        id: user._id.toString(),
        email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return token
};

authController.post("/register", async (req, res) => {
    try {
        const isExisting = await User.findOne({ email: req.body.email });
        if (isExisting) {
            return res.status(500).json({ msg: "User already registered" });
        }
        if (
            req.body.username === "" ||
            req.body.email === "" ||
            req.body.password === ""
        ) {
            return res.status(500).json({ msg: "All fields are required" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        });
        await user.save();

        const { password, ...others } = user._doc;
        const token = createToken(others);
        return res.status(201).json({ others, token });
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

module.exports = authController;
