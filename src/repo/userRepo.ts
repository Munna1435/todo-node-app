import pool from "../config/db";
const bcrypt = require("bcryptjs");

export const createUser = async (username : string, password : string) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
            [username, hashedPassword]
        );
        return result.rows[0];
    }

export const getUserByUsername = async (username : string) => {
        const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        return result.rows[0];
};
