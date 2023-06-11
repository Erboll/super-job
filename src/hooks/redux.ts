import { RootState } from '../store';
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Root } from "../types";

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector