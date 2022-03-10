import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loggedIn: null,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload); // using unshift to add todo to the beginning
    },
    deleteTodo: (state, action) => {
      // state.todos.filter((todo) => todo.id === action.payload);
      state.todos.splice(
        state.todos.findIndex((item) => item.id === action.payload),
        1
      );
    },
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = null;
    },
  },
});

export const { login, logout, addTodo, deleteTodo } = userSlice.actions;

export default userSlice.reducer;
