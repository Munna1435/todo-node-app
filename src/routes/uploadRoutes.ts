import express from "express";
import { Request, Response }from "express";
import { upload } from "../middlewares";

const router = express.Router();

// File Upload API
router.post("/", upload.single("file"), (req : Request, res : Response) => {
    if (!req.file){ 
        res.status(400).json({ message: "No file uploaded" });
        return;
    }

    res.status(200).json({
        message: "File uploaded successfully",
        filePath: `/uploads/${req.file.filename}`,
    });
});

export default router;
