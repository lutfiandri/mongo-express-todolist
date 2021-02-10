import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// Import Routes
import todoRoutes from './routes/todos.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/todos', todoRoutes);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to db');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
