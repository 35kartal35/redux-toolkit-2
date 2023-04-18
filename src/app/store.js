import jopSlice from "./jopSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    jopSlice,
});

export default configureStore({ reducer: rootReducer });