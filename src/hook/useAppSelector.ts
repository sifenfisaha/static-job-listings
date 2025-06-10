import type { AppState } from "../types/types";
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
