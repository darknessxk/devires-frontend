import { Instance } from '../client';

export const deleteItem = async (id: number) => {
  return await Instance.delete(`/todos/${id}`);
};
