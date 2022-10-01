import express from 'express';
import cors from 'cors';

import { errorMiddleware } from '../middleware/error.middleware';
import { loggerMiddleware } from '../utils/logger';

import usersRouter from '../controllers/users.controller';
import categoriesRouter from '../controllers/categories.controller';
import expensesRouter from '../controllers/expenses.controller';

function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(loggerMiddleware);

  app.use('/api/users', usersRouter);
  app.use('/api/categories', categoriesRouter);
  app.use('/api/expenses', expensesRouter);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.use(errorMiddleware);

  return app;
}

export default createServer;
