import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("user/fetch", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data.length);
    return res.data;
});

const state = {
    error: null,
    status: "idle",
    users: []
};

const userslice = createSlice({
    name: "user",
    initialState: state,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = "pending"; 
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.status = "success";
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message;
            state.status = "failed";
        });
    }
});

export default userslice.reducer;