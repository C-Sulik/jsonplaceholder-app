import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type TodosStateI = {
  list: any[];
  loading: boolean;
  error: null | string | undefined;
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
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
    loading: false,
    error: null,
  } as TodosStateI,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (todos, action) => {
      todos.loading = true;
      todos.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (todos, action) => {
      todos.list = action.payload;
      todos.loading = false;
    });
    builder.addCase(fetchTodos.rejected, (todos, action) => {
      todos.error = action.error.message;
      todos.loading = false;
    });
  },
});

const { actions, reducer } = todosSlice;
