import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: null,
    user: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            localStorage.clear();
            state.user = action.payload.others;
            state.admin = action.payload.others;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token); // set the token in localStorage
        },
        register(state, action) {
            localStorage.clear();
            state.user = action.payload.others;
            state.admin = action.payload.others;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token); // set the token in localStorage
        },
        logout(state, action) {
            state.user = null;
            state.admin = null;
            state.token = null;
            localStorage.clear();
            localStorage.removeItem('token'); // remove the token from localStorage
        },
    },
});

export const { login, register, logout } = authSlice.actions;

export default authSlice.reducer;
