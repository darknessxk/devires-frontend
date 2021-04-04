import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { TodoState } from '../../types/TodoState';
import { TodoItem } from '../../types';
import { addToList } from '../../services/todo';

const INITIAL_STATE: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<TodoItem>) => ({
      ...state,
      items: [...state.items, payload],
    }),
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const addItem = (item: TodoItem) => async (dispatch: Dispatch) => {
  const { status, data } = await addToList(item);

  if (status <= 200 && status >= 399) {
    return;
  }

  dispatch(addTodo(data));
};

export const selectExampleState = (state: RootState) => state.todoReducer;
