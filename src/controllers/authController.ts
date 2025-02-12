import { userService } from "../services";
import { Request, Response } from "express";

export const register = async (req : Request, res : Response) => {
    try {
        const { username, password } = req.body;
        const result = await userService.register(username, password);

        if (result.isUserExist) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        res.status(201).json(result);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
}

export const login = async (req : Request, res : Response) => {
    try {
        const { username, password } = req.body;
        const result = await userService.login(username, password);
        
        if (!result.isUserFound) {
            res.status(400).json({ message: "Invalid username or password" });
            return;
        }

        if (!result.isPasswordMatch) {
            res.status(400).json({ message: "Invalid username or password" });
            return;
        }
        
        res.json({ token : result.token });
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
}

