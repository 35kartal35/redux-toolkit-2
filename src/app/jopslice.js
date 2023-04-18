import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jops: [],
    initialized: false,
}

const jopSlice = createSlice({
    name: "jopSlice",
    initialState,
    reducers: {
        setJops: (state, action) => {
            state.jops = action.payload;

            state.initialized = true;
        },
    },
});

export const { setJops, addJop } = jopSlice.actions;
export default jopSlice.reducer; 