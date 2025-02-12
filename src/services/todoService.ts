const { todoRepo } = require("../repo/index");

// Create a new todo
export const createTodo = async (title : string) => {
    return todoRepo.createTodo(title);
};

// Get all todos
export const getTodos = async () => {
    return todoRepo.getTodos();
};

// Get a single todo
export const getTodoById = async (id : number) => {
    return todoRepo.getTodoById(id);
};

// Update a todo
export const updateTodo = async (id : number, title : string, completed : string) => {
    return todoRepo.updateTodo(id, title, completed);
};

// Delete a todo
export const deleteTodo = async (id : string) => {
    return todoRepo.deleteTodo(id);
};
