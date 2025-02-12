const express = require("express");
const { upload } = require("../middlewares");

const router = express.Router();

// File Upload API
router.post("/", upload.single("file"), (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    res.status(200).json({
        message: "File uploaded successfully",
        filePath: `/uploads/${req.file.filename}`,
    });
});

module.exports = router;
