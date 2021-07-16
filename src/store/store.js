import { configureStore } from "@reduxjs/toolkit";

import { settingsSlice } from "./settings/settings-slice";
import { homeSlice } from "./home/home-slice";

export const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
    home: homeSlice.reducer,
  },
  devTools: true,
});

// https://redux-toolkit.js.org/tutorials/typescript#project-setup

// Infer the `IRootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
