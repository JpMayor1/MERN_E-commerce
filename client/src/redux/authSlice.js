import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: null,
    user: null,
    token: null,
    role: null, // Add role property
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            localStorage.clear();
            state.user = action.payload.others;
            state.admin = action.payload.others;
            state.role = action.payload.role; // Set the role in state
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        },
        register(state, action) {
            localStorage.clear();
            state.user = action.payload.others;
            state.admin = action.payload.others;
            state.role = action.payload.role; // Set the role in state
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        },
        logout(state, action) {
            state.user = null;
            state.admin = null;
            state.role = null;
            state.token = null;
            localStorage.clear();
            localStorage.removeItem("token");
        },
    },
});

export const { login, register, logout } = authSlice.actions;

export default authSlice.reducer;
