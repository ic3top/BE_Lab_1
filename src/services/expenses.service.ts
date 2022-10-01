import { v4 as uuidv4 } from 'uuid';
import { Expense } from '../models/expense';

// TODO: use database
const EXPENSES: Expense[] = [];

export const getExpenses = (): Expense[] => EXPENSES;

export const createExpense = (expense: Omit<Expense, 'createdAt' | 'id'>): Expense => {
  const newExpense: Expense = {
    ...expense,
    createdAt: new Date().toISOString(),
    id: uuidv4(),
  };
  EXPENSES.push(newExpense);

  return newExpense;
};

export const getUserExpenses = (userId: string) => EXPENSES
  .filter((record) => record.userId === userId);

export const getUserExpensesByCategory = (userId: string, categoryId: string) => getUserExpenses(userId).filter((record) => record.categoryId === categoryId);
