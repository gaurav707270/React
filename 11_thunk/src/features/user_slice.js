import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios } from "axios";

const fetchUsers = createAsyncThunk("user/fetch", async () => {
    const res = axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data
})

const initialState = {
    
    
}

const userslice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state ,action) => {

        })
    }
})