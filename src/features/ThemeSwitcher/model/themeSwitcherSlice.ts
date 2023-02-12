import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme, ThemeSwitcherSliceState } from "./themeSwitcherSlice.types";

const initialState: ThemeSwitcherSliceState = {
    theme: "light",
};

export const themeSwitcherSlice = createSlice({
    name: "themeSwitcher",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSwitcherSlice.actions;
