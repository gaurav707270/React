import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk("post/addUser", async (userData) => {
  const res = await axios.post("http://localhost:3000/users",userData)
  return res.data

})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    loading: false,
    error: null,


  },
  reducers: {
    // signUpRed: (state, action) => {
    //   state.user = action.payload;
    // },

    // signInRed: (state, action) => {
    //   // login logic
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(() => {

    })
  },
});

export const { signUpRed, signInRed } = authSlice.actions;

export default authSlice.reducer;