import pool from "../config/db";

// Create a new todo
const createTodo = async (title : string) => {
    const result = await pool.query(
        "INSERT INTO todos (title) VALUES ($1) RETURNING *",
        [title]
    );
    return result.rows[0];
};

// Get all todos
const getTodos = async () => {
    const result = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    return result.rows;
};

// Get a single todo
const getTodoById = async (id : number) => {
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
    return result.rows[0];
};

// Update a todo
const updateTodo = async (id : number, title : string, completed : boolean) => {
    const result = await pool.query(
        "UPDATE todos SET title = $1, completed = $2 WHERE id = $3 RETURNING *",
        [title, completed, id]
    );
    return result.rows[0];
};

// Delete a todo
const deleteTodo = async (id : number) => {
    const result = await pool.query("DELETE FROM todos WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

export {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
}
