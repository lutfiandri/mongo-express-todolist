/* eslint-disable no-console */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// improt routes
import todoRoutes from './routes/todo.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use('/api/todos', todoRoutes);
    app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
  })
  .catch((err) => {
    console.error(err);
  });
