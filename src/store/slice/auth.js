import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    currentUser: null
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    logout(state, action) {
      state.token = null;
      localStorage.removeItem("token");
    }
  }
});

export const { setToken, setCurrentUser, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
