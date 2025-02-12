import { todoService } from "../services/index";
import { Request, Response } from "express";

// Create a new todo
export const createTodo = async (req : Request, res : Response) => {
    try {
        const { title } = req.body;
        const todo = await todoService.createTodo(title);
        res.status(201).json(todo);
    } catch (err : any) {
        res.status(500).json({ error: err.message });
    }
};

// Get all todos
export const getTodos = async (req : Request, res : Response) => {
    try {
        const todos = await todoService.getTodos();
        res.json(todos);
    } catch (err : any) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single todo
export const getTodoById = async (req : Request, res : Response) => {
    try {
        const todo = await todoService.getTodoById(Number(req.params.id));
        if (!todo){
            res.status(404).json({ message: "Todo not found" });
        }else{
            res.json(todo);
        }
    } catch (err : any) {
        res.status(500).json({ error: err.message });
    }
};

// Update a todo
export const updateTodo = async (req : Request, res : Response) => {
    try {
        const { title, completed } = req.body;
        const todo = await todoService.updateTodo(Number(req.params.id), title, completed);
        if (!todo) {
            res.status(404).json({ message: "Todo not found" });
            return;
        } 
        res.json(todo);
    } catch (err : any) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a todo
export const deleteTodo = async (req : Request, res : Response) => {
    try {
        const todo = await todoService.deleteTodo(req.params.id);
        if (!todo) {
            res.status(404).json({ message: "Todo not found" });
            return;
        }
        res.json({ message: "Todo deleted successfully" });
    } catch (err : any) {
        res.status(500).json({ error: err.message });
    }
};
