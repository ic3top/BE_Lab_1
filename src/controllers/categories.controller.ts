import express from 'express';
import {
  createCategory, getCategories,
} from '../services/categories.service';

const router = express.Router();

router.get('/', (req, res) => {
  const categories = getCategories();

  res.json({ data: categories });
});

router.post('/', (req, res) => {
  const { name } = req.body;

  const newCategory = createCategory(name);

  res.json({ data: newCategory, message: 'New category created' });
});

export default router;
