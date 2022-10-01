import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/user';

const USERS: User[] = [];

export const getUsers = () => USERS;

export const createUser = (login: string) => {
  const newUser = {
    login,
    id: uuidv4(),
  };
  USERS.push(newUser);

  return newUser;
};
