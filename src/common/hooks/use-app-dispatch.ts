import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";

// https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
