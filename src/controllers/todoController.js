const { todoService } = require("../services/index");

// Create a new todo
exports.createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const todo = await todoService.createTodo(title);
        res.status(201).json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await todoService.getTodos();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single todo
exports.getTodoById = async (req, res) => {
    try {
        const todo = await todoService.getTodoById(req.params.id);
        if (!todo) return res.status(404).json({ message: "Todo not found" });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a todo
exports.updateTodo = async (req, res) => {
    try {
        const { title, completed } = req.body;
        const todo = await todoService.updateTodo(req.params.id, title, completed);
        if (!todo) return res.status(404).json({ message: "Todo not found" });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await todoService.deleteTodo(req.params.id);
        if (!todo) return res.status(404).json({ message: "Todo not found" });
        res.json({ message: "Todo deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
