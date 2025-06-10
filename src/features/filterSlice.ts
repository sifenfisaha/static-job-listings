import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppState, Filter } from "../types/types";

const initialState: AppState = {
  filters: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<Filter>) => {
      const exisistingFilter = state.filters.includes(action.payload);
      if (!exisistingFilter) {
        state.filters.push(action.payload);
      }
    },
    removeFilter: (state, action: PayloadAction<Filter>) => {
      state.filters = state.filters.filter((item) => item !== action.payload);
    },
    clearFilter: (state) => {
      state.filters = [];
    },
  },
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;
