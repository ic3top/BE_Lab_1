import express from 'express';
import cors from 'cors';

import { errorMiddleware } from '../middleware/error.middleware';

import usersRouter from '../controllers/users.controller';
import { loggerMiddleware } from '../utils/logger';

function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(loggerMiddleware);

  app.use('/api/users', usersRouter);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.use(errorMiddleware);

  return app;
}

export default createServer;
