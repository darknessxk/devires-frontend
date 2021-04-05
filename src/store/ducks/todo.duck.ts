import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { TodoItem, TodoState } from '../../types';
import { addToList, deleteItem, getList } from '../../services/todo';

const INITIAL_STATE: TodoState = {
  items: [],
};

export const getTodoList = createAsyncThunk('todo/getList', async () => {
  const { status, data } = await getList();
  if (status <= 199 && status >= 400) {
    return [];
  } else {
    return data;
  }
});

export const addTodoItem = createAsyncThunk(
  'todo/addItem',
  async (item: TodoItem) => {
    const { status, data } = await addToList(item);

    if (status <= 200 && status >= 399) {
      return;
    }

    return data;
  }
);

export const deleteTodoItem = createAsyncThunk(
  'todo/deleteItem',
  async (id: number) => {
    const { status } = await deleteItem(id);

    if (status <= 200 && status >= 399) {
      return -1;
    }

    return id;
  }
);

const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.items = payload;
    });
    builder.addCase(addTodoItem.fulfilled, (state, { payload }) => {
      if (payload) {
        state.items.push(payload);
      }
    });
    builder.addCase(deleteTodoItem.fulfilled, (state, { payload }) => {
      if (payload) {
        state.items = state.items.filter((item) => item.id !== payload);
      }
    });
  },
});

export default todoSlice.reducer;

export const selectTodoState = (state: RootState) => state.todoReducer;
