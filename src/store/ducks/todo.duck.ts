import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from 'store';
import { TodoItem, TodoState } from '../../types';
import { addToList, getList } from '../../services/todo';

const INITIAL_STATE: TodoState = {
  items: [],
};

export const getTodoList = createAsyncThunk('todo/getList', async () => {
  const response = await getList();
  if (response.status <= 199 && response.status >= 400) {
    return [];
  } else {
    return response.data;
  }
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<TodoItem>) => ({
      ...state,
      items: [...state.items, payload],
    }),
    addTodoArray: (state, { payload }: PayloadAction<Array<TodoItem>>) => ({
      ...state,
      items: [...state.items, ...payload],
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.items.push(...payload);
    });
  },
});

export const { addTodo, addTodoArray } = todoSlice.actions;

export default todoSlice.reducer;

export const addItem = (item: TodoItem) => async (dispatch: Dispatch) => {
  const { status, data } = await addToList(item);

  if (status <= 200 && status >= 399) {
    return;
  }

  dispatch(addTodo(data));
};

export const selectTodoState = (state: RootState) => state.todoReducer;
