import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    payment: "",
};

export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        submitPayment: (state, action) => {
            state.payment = action.payload;
        },
    },
});

export const { submitPayment } = paymentSlice.actions;

export default paymentSlice.reducer;