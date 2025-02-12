import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import {logger, auth} from "./middlewares";
import { todoRoutes, authRoutes, uploadRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.use("/api/auth", authRoutes);
app.use(auth)
app.use("/api/todos", todoRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req : Request, res : Response) => {
    res.send("Welcome to the Todo API!");
});

export default app;
