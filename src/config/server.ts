import express from 'express';
import cors from 'cors';

import { errorMiddleware } from '../middleware/error.middleware';
import { loggerMiddleware } from '../utils/logger';

import usersRouter from '../controllers/users.controller';
import categoriesRouter from '../controllers/categories.controller';

function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(loggerMiddleware);

  app.use('/api/users', usersRouter);
  app.use('/api/categories', categoriesRouter);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.use(errorMiddleware);

  return app;
}

export default createServer;
