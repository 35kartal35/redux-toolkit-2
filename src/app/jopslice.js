import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jops: [],
    initialized: false,
}

const JopSlice = createSlice({
    name: "jopslice",
    initialState,
    reducers: {
        setJops: (state, action) => {
            state.jops = action.payload;

            state.initialized = true;
        },
    },
});

export const { setJops } = JopSlice.actions;
export default JopSlice.reducer; 