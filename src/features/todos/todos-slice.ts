import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchingStatuses, FetchingStatus } from '../../types';

const { pending, fulfilled, rejected } = fetchingStatuses;

export type StateFetchingStatuses = { list: FetchingStatus; edit: number[]; delete: number[] };

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
      return { id, ...data };
    } catch (error) {
      throw Error(error);
    }
  },
);

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });
    if (response.status !== 200) throw new Error(`Status: ${response.status}`);
    const data = await response.json();
    return { id, ...data };
  } catch (error) {
    throw Error(error);
  }
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    fetchingStatus: { list: 'pending', edit: [], delete: [] },
    error: null,
  } as TodosStateI,
  reducers: {},
  extraReducers: (builder) => {
    // fetchTodos
    builder.addCase(fetchTodos.pending, (todos, action) => {
      todos.fetchingStatus.list = pending;
      todos.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (todos, action) => {
      todos.list = action.payload;
      todos.fetchingStatus.list = fulfilled;
    });
    builder.addCase(fetchTodos.rejected, (todos, action) => {
      todos.error = action.error.message;
      todos.fetchingStatus.list = rejected;
    });

    // updateTodo
    builder.addCase(updateTodo.pending, (todos, action) => {
      todos.fetchingStatus.edit.push(action.meta.arg.id);
      todos.error = null;
    });
    builder.addCase(updateTodo.fulfilled, (todos, action) => {
      todos.list = todos.list.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
      );
      todos.fetchingStatus.edit = todos.fetchingStatus.edit.filter(
        (id) => id !== action.payload.id,
      );
    });
    builder.addCase(updateTodo.rejected, (todos, action) => {
      todos.error = action.error.message;
      todos.fetchingStatus.edit = todos.fetchingStatus.edit.filter(
        (id) => id !== action.meta.arg.id,
      );
    });

    // delete
    builder.addCase(deleteTodo.pending, (todos, action) => {
      todos.fetchingStatus.delete.push(action.meta.arg);
      todos.error = null;
    });
    builder.addCase(deleteTodo.fulfilled, (todos, action) => {
      todos.list = todos.list.filter((todo) => todo.id !== action.payload.id);
      todos.fetchingStatus.delete = todos.fetchingStatus.delete.filter(
        (id) => id !== action.payload.id,
      );
    });
    builder.addCase(deleteTodo.rejected, (todos, action) => {
      todos.error = action.error.message;
      todos.fetchingStatus.delete = todos.fetchingStatus.delete.filter(
        (id) => id !== action.meta.arg,
      );
    });
  },
});
