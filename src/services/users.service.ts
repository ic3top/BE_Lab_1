import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/user';

// TODO: use database
const USERS: User[] = [];

export const getUsers = (): User[] => USERS;

export const createUser = (login: string): User => {
  const newUser = {
    login,
    id: uuidv4(),
  };
  USERS.push(newUser);

  return newUser;
};
