import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      password: "",
    },
  },
  reducers: {
    signUpRed: (state, action) => {
      state.user = action.payload;
    },

    signInRed: (state, action) => {
      // login logic
    },
  },
});

export const { signUpRed, signInRed } = authSlice.actions;

export default authSlice.reducer;