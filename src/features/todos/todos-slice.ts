import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchingStatuses, FetchingStatus } from '../../types';

export type StateFetchingStatuses = { list: FetchingStatus; todo: number[] };

export type TodosStateI = {
  list: TodoI[];
  fetchingStatus: StateFetchingStatuses;
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
    if (response.status !== 200) throw new Error(`Status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
});

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({ id, payload }: { id: number; payload: Partial<TodoI> }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response.status !== 200) throw new Error(`Status: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error(error);
    }
  },
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    fetchingStatus: { list: 'pending', todo: [] },
    error: null,
  } as TodosStateI,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (todos, action) => {
      todos.fetchingStatus.list = fetchingStatuses.pending;

      todos.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (todos, action) => {
      todos.list = action.payload;
      todos.fetchingStatus.list = fetchingStatuses.fulfilled;
    });
    builder.addCase(fetchTodos.rejected, (todos, action) => {
      todos.error = action.error.message;
      todos.fetchingStatus.list = fetchingStatuses.rejected;
    });
    builder.addCase(updateTodo.pending, (todos, action) => {
      todos.fetchingStatus.todo.push(action.meta.arg.id);
      todos.error = null;
    });
    builder.addCase(updateTodo.fulfilled, (todos, action) => {
      todos.list = todos.list.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed;
        }
        return todo;
      });
      todos.fetchingStatus.todo = todos.fetchingStatus.todo.filter(
        (id) => id !== action.payload.id,
      );
    });
    builder.addCase(updateTodo.rejected, (todos, action) => {
      todos.error = action.error.message;
      todos.fetchingStatus.todo = todos.fetchingStatus.todo.filter(
        (id) => id !== action.meta.arg.id,
      );
    });
  },
});
