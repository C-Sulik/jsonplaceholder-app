import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchingStatuses, FetchingStatus } from '../../types';

export type TodosStateI = {
  list: TodoI[];
  fetchingStatus: FetchingStatus;
  error: null | string | undefined;
};

export type TodoI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
    if (response.status === 404) throw new Error(`Status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    fetchingStatus: 'pending',
    error: null,
  } as TodosStateI,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (todos, action) => {
      todos.fetchingStatus = fetchingStatuses.pending;
      todos.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (todos, action) => {
      todos.list = action.payload;
      todos.fetchingStatus = fetchingStatuses.fulfilled;
    });
    builder.addCase(fetchTodos.rejected, (todos, action) => {
      todos.error = action.error.message;
      todos.fetchingStatus = fetchingStatuses.rejected;
    });
  },
});

const { actions, reducer } = todosSlice;
