import { Instance } from '../client';

export const getList = async () => {
  return await Instance.get('/todos');
};
