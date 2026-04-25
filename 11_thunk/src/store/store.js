import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User_slice.js";

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store;