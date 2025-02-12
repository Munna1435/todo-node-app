import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default (req : any, res : Response, next : NextFunction) => {
    const token = req.header("Authorization");

    if (!token) {
         res.status(401).json({ message: "Access denied. No token provided." });
         return;
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET || "");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};

