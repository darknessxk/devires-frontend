import { Instance } from '../client';
import { TodoItem } from '../../types';

export const getList = async () => {
  return await Instance.get<Array<TodoItem>>('/todos');
};
