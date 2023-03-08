const uploadController = require("express").Router();
const multer = require("multer");
const verifyToken = require("../middlewares/auth");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename);
    },
});

const upload = multer({
    storage: storage,
});

uploadController.post(
    "/img",
    verifyToken,
    upload.single("image"),
    async (req, res) => {
        try {
            return res.status(200).json({ msg: "Successfully uploaded" });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
);

module.exports = uploadController;
