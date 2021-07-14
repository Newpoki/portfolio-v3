import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "store";

// https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
