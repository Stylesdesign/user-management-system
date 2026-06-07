import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "../types/User";

interface UserState {
  users: User[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    return (await response.json()) as User[];
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
 
  reducers: {
  updateUser: (state, action) => {
  state.users = state.users.map((user) =>
    user.id === action.payload.id
      ? action.payload
      : user
  );
},
  addUser: (state, action) => {
    state.users.push(action.payload);
},
  deleteUser: (state, action) => {
    state.users = state.users.filter(
      (user) => user.id !== action.payload
    );
  },
},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export const {
  addUser,
  updateUser,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;