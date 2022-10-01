import express from 'express';
import {
  createExpense, getExpenses, getUserExpenses, getUserExpensesByCategory,
} from '../services/expenses.service';

const router = express.Router();

router.get('/', (req, res) => {
  const expenses = getExpenses();

  res.json({ data: expenses });
});

router.post('/', (req, res) => {
  const newExpense = createExpense(req.body);

  res.json({ data: newExpense, message: 'New expense created' });
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const userExpenses = getUserExpenses(userId);

  res.json({ data: userExpenses });
});

router.get('/:userId/:categoryId', (req, res) => {
  const { userId, categoryId } = req.params;
  const userExpenses = getUserExpensesByCategory(userId, categoryId);

  res.json({ data: userExpenses });
});

export default router;
