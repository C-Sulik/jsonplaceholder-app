import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './features/users/user-slice';
import { todosSlice } from './features/todos/todos-slice';

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    todos: todosSlice.reducer,
  },
});

export type RootStateI = ReturnType<typeof store.getState>;
