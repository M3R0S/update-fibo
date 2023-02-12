import { combineReducers } from "@reduxjs/toolkit";
import { themeSwitcherSlice } from "features/ThemeSwitcher";

export const rootReducers = combineReducers({
    [themeSwitcherSlice.name]: themeSwitcherSlice.reducer,
});
