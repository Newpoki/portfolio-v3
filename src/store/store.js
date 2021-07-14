import { configureStore } from "@reduxjs/toolkit";

import { settingsSlice } from "./settings/settings-slice";

export const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
  },
  devTools: true,
});

// https://redux-toolkit.js.org/tutorials/typescript#project-setup

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;