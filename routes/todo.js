import express from 'express';
import * as TodoController from '../controllers/TodoController.js';

const router = express.Router();

router.get('/', TodoController.getAllTodos);

router.get('/:id', TodoController.getTodo);

router.post('/', TodoController.addTodo);

router.put('/:id', TodoController.updateTodo);

router.delete('/:id', TodoController.deleteTodo);

export default router;
