import { PaletteMode } from "@material-ui/core";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "common";
import * as ls from "local-storage";

import { THEME_LS_KEY } from "./settings-constants";
import { getDefaultLocaleCode } from "./settings-utils";

export type IThemeVariant = PaletteMode | "system";

export type ILocaleCode = "fr-FR" | "en-GB";

export interface ILocale {
  code: ILocaleCode;
  name: string;
}

interface ISettingsState {
  theme: IThemeVariant;
  locales: {
    isLoading: boolean;
    data: ILocale[] | null;
    currentCode: ILocaleCode;
  };
}

/**
 * Get all the available locale from the back end
 */
export const getAvailableLocales = createAsyncThunk("settings/locales", async () => {
  const response = await api<ILocale[]>({
    method: "get",
    url: "/i18n/locales",
  });

  return { data: response.data };
});

const initialState: ISettingsState = {
  theme: ls.get(THEME_LS_KEY) ?? "system",
  locales: {
    isLoading: false,
    data: null,
    currentCode: getDefaultLocaleCode(),
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeCurrentTheme: (state, action: PayloadAction<{ theme: IThemeVariant }>) => {
      state.theme = action.payload.theme;
    },
    changeCurrentLocaleCode: (state, action: PayloadAction<{ localeCode: ILocaleCode }>) => {
      state.locales.currentCode = action.payload.localeCode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAvailableLocales.pending, (state) => {
      state.locales.isLoading = true;
    });

    builder.addCase(getAvailableLocales.fulfilled, (state, action) => {
      state.locales.data = action.payload.data;
      state.locales.isLoading = false;
    });

    builder.addCase(getAvailableLocales.rejected, (state) => {
      state.locales.isLoading = false;
    });
  },
});

export const { changeCurrentTheme, changeCurrentLocaleCode } = settingsSlice.actions;
