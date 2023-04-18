import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jops: [],
    filtredJops: [],
    initialized: false,
};

const jopSlice = createSlice({
    name: "jopSlice",
    initialState,
    reducers: {
        setJops: (state, action) => {
            state.jops = action.payload;
            state.filtredJops = action.payload
            state.initialized = true;
        },
        //filtredeki inputa göre filtre
        handleInputChange: (state, action) => {
            const filtredByQuery = state.jops.filter((jop) => {
                const selectedJop = jop.company.toLowerCase();
                const query = action.payload.toLowerCase();

                return selectedJop.includes(query);
            });

            state.filtredByQuery = filtredByQuery
        },
        handleStatusChange: (state, action) => {
            const filtredByStatus = state.jops.filter(
                (jop) => jop.status === action.payload
            );
            state.filtredJops = filtredByStatus;
        },
        handleSortChange: (state, action) => {

            switch (action.payload) {
                case "a-z":
                    state.filtredJops.sort((a, b) => {
                        if (a.company < b.company) return -1;
                        if (a.company > b.company) return 1;
                        return 0;
                    });
                    break;
                case "z-a":
                    state.filtredJops.sort((a, b) => {
                        if (a.company < b.company) return 1;
                        if (a.company > b.company) return -1;

                        return 0;
                    });

                    break;
                case "önce-yeni":
                    state.filtredJops.sort((a, b) => new Date(b.date) - new Date(a.date))
                    break;
                case "önce-eski":
                    state.filtredJops
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .reverse();
                    break;

                default:
                    break;
            }
        },
        handleReset: (state) => {
            state.filtredJops = state.jops
        }
    },
});

export const {
    setJops,
    addJop,
    handleInputChange,
    handleStatusChange,
    handleSortChange,
    handleReset
} = jopSlice.actions;
export default jopSlice.reducer; 