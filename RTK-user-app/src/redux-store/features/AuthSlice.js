import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: 
      [],
    
  },
  reducers: {
    // signUpRed: (state, action) => {
    //   state.user = action.payload;
    // },

    // signInRed: (state, action) => {
    //   // login logic
    // },
  },
  extraReducers: (builder) =>{
builder.addCase(() =>{
  
})
  },
});

export const { signUpRed, signInRed } = authSlice.actions;

export default authSlice.reducer;