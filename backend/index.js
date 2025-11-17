import express from 'express';
import { createTodo, updateTodo } from './type.js';
import Todo from './db.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// Get all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ msg: "Failed to fetch todos" });
    }
});

// Get a single todo by ID
app.get('/todo/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ msg: "Todo not found" });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ msg: "Failed to fetch todo" });
    }
});

// Create a new todo
app.post('/todo', async (req, res) => {
    const response = createTodo.safeParse(req.body);
    if (!response.success) {
        return res.status(411).json({
            msg: "You sent the wrong data",
        });
    }

    try {
        await Todo.create(req.body);
        res.json({
            msg: "Todo created successfully"
        });
    } catch (error) {
        res.status(500).json({ msg: "Failed to create todo" });
    }
});

// Update a todo by ID
app.put('/todo/:id', async (req, res) => {
    const response = updateTodo.safeParse(req.body);
    if (!response.success) {
        return res.status(411).json({
            msg: "You sent the wrong data",
        });
    }

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }
        res.json({
            msg: "Todo updated successfully",
            todo: updatedTodo
        });
    } catch (error) {
        res.status(500).json({ msg: "Failed to update todo" });
    }
});

// Delete a todo by ID
app.delete('/todo/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }
        res.json({
            msg: "Todo deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ msg: "Failed to delete todo" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});