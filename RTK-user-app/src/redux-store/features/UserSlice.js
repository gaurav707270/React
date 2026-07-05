import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [{
            email: "",
            password: ""
        }]
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },

        updateUser: (state, action) => {
            const { i, user } = action.payload;
            state.users[i] = user
        },

        removeUser: (state, action) => {
            state.users.splice(action.payload, 1)

        }
    }
})

export default userSlice.reducer;
export const { addUser, updateUser, removeUser } = userSlice.actions;