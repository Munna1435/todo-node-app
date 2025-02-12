const { todoRepo } = require("../repo/index");

// Create a new todo
exports.createTodo = async (title) => {
    return todoRepo.createTodo(title);
};

// Get all todos
exports.getTodos = async () => {
    return todoRepo.getTodos();
};

// Get a single todo
exports.getTodoById = async (id) => {
    return todoRepo.getTodoById(id);
};

// Update a todo
exports.updateTodo = async (id, title, completed) => {
    return todoRepo.updateTodo(id, title, completed);
};

// Delete a todo
exports.deleteTodo = async (id) => {
    return todoRepo.deleteTodo(id);
};
