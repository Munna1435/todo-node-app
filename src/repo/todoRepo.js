const pool = require("../config/db");

// Create a new todo
exports.createTodo = async (title) => {
    const result = await pool.query(
        "INSERT INTO todos (title) VALUES ($1) RETURNING *",
        [title]
    );
    return result.rows[0];
};

// Get all todos
exports.getTodos = async () => {
    const result = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    return result.rows;
};

// Get a single todo
exports.getTodoById = async (id) => {
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
    return result.rows[0];
};

// Update a todo
exports.updateTodo = async (id, title, completed) => {
    const result = await pool.query(
        "UPDATE todos SET title = $1, completed = $2 WHERE id = $3 RETURNING *",
        [title, completed, id]
    );
    return result.rows[0];
};

// Delete a todo
exports.deleteTodo = async (id) => {
    const result = await pool.query("DELETE FROM todos WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};
