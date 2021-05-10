import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type UsersStateI = {
  list: any[];
  loading: boolean;
  error: null | string | undefined;
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null,
  } as UsersStateI,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (users, action) => {
      users.loading = true;
      users.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (users, action) => {
      users.list = action.payload;
      users.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (users, action) => {
      users.error = action.error.message;
      users.loading = false;
    });
  },
});
