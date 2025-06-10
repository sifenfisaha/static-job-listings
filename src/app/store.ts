import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "../features/filterSlice";

const store = configureStore({
  reducer: FilterReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
