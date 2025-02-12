const express = require("express");
const cors = require("cors");
const {logger, auth} = require("./middlewares");
const { todoRoutes, authRoutes, uploadRoutes } = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.use("/api/auth", authRoutes);
app.use(auth)
app.use("/api/todos", todoRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Todo API!");
});
module.exports = app;
