/* eslint-disable no-restricted-imports */
import { configureStore } from "@reduxjs/toolkit";

import {
  TypedUseSelectorHook,
  // This is the ONLY place where the useDispatch and useSelector imports from react-redux are allowed.
  useDispatch as useReactReduxDispatch,
  useSelector as useReactReduxSelector,
} from "react-redux";
import { IAppDispatch, IRootState } from "./interfaces";

import settings from "./settings/settings-slice";
import home from "./home/home-slice";
import cv from "./cv/cv-slice";
import contact from "./contact/contact-slice";

export const store = configureStore({
  reducer: {
    settings,
    home,
    cv,
    contact,
  },
});

/** A redux useDispatch override to handle the async thunks contaiend in redux toolkit */
export const useDispatch = () => useReactReduxDispatch<IAppDispatch>();

/** A redux useSelector override to  */
export const useSelector: TypedUseSelectorHook<IRootState> = useReactReduxSelector;
