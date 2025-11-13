import express from 'express';
// import { createTodo, updateTodo } from './type';
import { createTodo, updateTodo } from './type.js';
import Todo from './db.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})

app.post('/todo', async (req, res) => {
    const response = createTodo.safeParse(req.body);
    if (!response.success) {
        res.status(411).json({
            msg: "you send the wrong data",
        })
        return;
    }

    // continue with creating a todo
    await Todo.create(req.body);

    res.json({
        msg: "Todo created successfully"
    })
})


app.put('/completed', async (req, res) => {
    console.log('Request Body:', req.body); // Debugging line
    const response = updateTodo.safeParse(req.body);
    if (!response.success) {
        res.status(411).json({
            msg: "you send the wrong data",
        })
        return;
    }

    // continue with updating a todo
    const { id, completed } = req.body;
    console.log('reached here   with id:', id); // Debugging line
    await Todo.updateOne({ _id: id }, { completed }, { new: true })

    res.json({
        msg: "Todo Status Changed Successfully"
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});