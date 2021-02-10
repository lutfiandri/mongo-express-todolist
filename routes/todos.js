import express from 'express';
import Todo from '../models/Todo.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('ok, get /');
});

router.post('/', (req, res) => {
  console.log(req.body);
});

export default router;
