import { configureStore } from "@reduxjs/toolkit";

import {
  TypedUseSelectorHook,
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

// TODO: Empecher l'utilisation de useDispatch et useSelector de redux sauf dans ce fichier

/** A redux useDispatch override to handle the async thunks contaiend in redux toolkit */
export const useDispatch = () => useReactReduxDispatch<IAppDispatch>();

/** A redux useSelector override to  */
export const useSelector: TypedUseSelectorHook<IRootState> = useReactReduxSelector;
