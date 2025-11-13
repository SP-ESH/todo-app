import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/todoApp')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;