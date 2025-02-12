const jwt = require("jsonwebtoken");
const { userService } = require("../services");

module.exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await userService.register(username, password);

        if (result.isUserExist) return res.status(400).json({ message: "User already exists" });

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await userService.login(username, password);
        
        if (!result.isUserFound) return res.status(400).json({ message: "Invalid username or password" });

        if (!result.isPasswordMatch) return res.status(400).json({ message: "Invalid username or password" });
        
        res.json({ token : result.token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

