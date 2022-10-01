import express from 'express';
import {
  createUser, getUsers,
} from '../services/users.service';

const router = express.Router();

router.get('/', (req, res) => {
  const users = getUsers();

  res.json({ data: users });
});

router.post('/', (req, res) => {
  const { login } = req.body;

  const newUser = createUser(login);

  res.json({ data: newUser, message: 'New user created' });
});

export default router;
