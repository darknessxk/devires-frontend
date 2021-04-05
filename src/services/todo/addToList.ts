import { Instance } from '../client';
import { TodoItem } from '../../types';

export const addToList = async (item: TodoItem) => {
  return await Instance.post<TodoItem>('/todos', { ...item, done: false });
};
