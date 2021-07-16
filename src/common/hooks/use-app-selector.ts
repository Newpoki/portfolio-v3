import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootState } from "store";

// https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
