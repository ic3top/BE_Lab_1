import { v4 as uuidv4 } from 'uuid';
import { Category } from '../models/category';

// TODO: use database
const CATEGORIES: Category[] = [];

export const getCategories = (): Category[] => CATEGORIES;

export const createCategory = (name: string): Category => {
  const newCategory = { name, id: uuidv4() };
  CATEGORIES.push(newCategory);

  return newCategory;
};
