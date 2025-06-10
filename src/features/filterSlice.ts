import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppState, Filter } from "../types/types";

const initialState: AppState = [];

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<Filter>) => {
      state.push(action.payload);
    },
    removeFilter: (state, action: PayloadAction<Filter>) => {
      state = state.filter((item) => item !== action.payload);
    },
  },
});

export const { addFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;
