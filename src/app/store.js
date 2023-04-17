import jopslice from "./jopslice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    jopslice
})

export default configureStore({ reducer: rootReducer })