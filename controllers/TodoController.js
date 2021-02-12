import Todo from '../models/Todo.js';

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ _id: id });
    res.json(todo);
  } catch {
    res.status(404).json({
      error: `There's no todo with id ${id}`,
    });
  }
};

export const addTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const todo = await Todo.updateOne(
      { _id: id },
      {
        $set: {
          title,
          description,
        },
      },
    );
    res.json(todo);
  } catch {
    res.status(404).json({
      error: `There's no todo with id ${id}`,
    });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.remove({ _id: id });
    res.json(deletedTodo);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
