import zod from 'zod';

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean()
});

const updateTodo = zod.object({
    id: zod.string()
})

export { createTodo, updateTodo };