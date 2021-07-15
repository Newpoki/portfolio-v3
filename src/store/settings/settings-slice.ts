import { PaletteMode } from "@material-ui/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as ls from "local-storage";
import { THEME_LS_KEY } from "./settings-constants";

export type IThemeVariant = PaletteMode | "system";

interface ISettingsState {
  theme: IThemeVariant;
}

const initialState: ISettingsState = {
  theme: ls.get(THEME_LS_KEY) ?? "system",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeCurrentTheme: (state, action: PayloadAction<{ theme: IThemeVariant }>) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { changeCurrentTheme } = settingsSlice.actions;
