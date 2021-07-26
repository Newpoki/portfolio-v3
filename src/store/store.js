import * as rtk from "@reduxjs/toolkit";
import { settingsSlice } from "./settings/settings-slice";
import { homeSlice } from "./home/home-slice";
import { cvSlice } from "./cv/cv-slice";

export const store = rtk.configureStore({
  reducer: {
    settings: settingsSlice.reducer,
    home: homeSlice.reducer,
    cv: cvSlice.reducer,
  },
  devTools: true,
});

// https://redux-toolkit.js.org/tutorials/typescript#project-setup

// Infer the `IRootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch;
