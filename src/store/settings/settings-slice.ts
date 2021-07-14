import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IThemeVariant = "dark" | "light";

interface ISettingsState {
  theme: IThemeVariant;
}

const initialState: ISettingsState = {
  theme: "light",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<{ theme: IThemeVariant }>) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { changeTheme } = settingsSlice.actions;
