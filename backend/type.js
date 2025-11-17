import zod from 'zod';

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean()
});

// Validation for updating a todo
const updateTodo = zod.object({
    title: zod.string().optional(),
    description: zod.string().optional(),
    completed: zod.boolean().optional()
});

export { createTodo, updateTodo };