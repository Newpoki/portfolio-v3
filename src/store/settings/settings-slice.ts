import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "common";
import * as ls from "local-storage";

import {
  IChangeIsDrawerOpenPayload,
  IChangeLocaleCodePayload,
  IChangeThemeVariantPayload,
  ILocale,
  ISettingsState,
} from "./interfaces";
import { THEME_LS_KEY } from "./settings-constants";
import { getDefaultLocaleCode } from "./settings-utils";

const initialState: ISettingsState = {
  localeCode: getDefaultLocaleCode(),
  themeVariant: ls.get(THEME_LS_KEY) ?? "system",
  isDrawerOpen: false,
  availableLocales: {
    data: undefined,
    isLoading: true,
    errorCount: 0,
  },
};

export const fetchAvailableLocales = createAsyncThunk("settings/fetchAvailableData", async () => {
  const response = await api<Array<ILocale>>({
    method: "get",
    url: "/i18n/locales",
  });

  // TODO: Ajouter meilleur gestion erreur
  return response.data;
});

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeLocaleCode(state, { payload }: PayloadAction<IChangeLocaleCodePayload>) {
      state.localeCode = payload.localeCode;
    },
    changeThemeVariant(state, { payload }: PayloadAction<IChangeThemeVariantPayload>) {
      state.themeVariant = payload.themeVariant;
    },
    changeIsDrawerOpen(state, { payload }: PayloadAction<IChangeIsDrawerOpenPayload>) {
      state.isDrawerOpen = payload.isDrawerOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAvailableLocales.pending, (state) => {
      state.availableLocales.isLoading = true;
    });

    builder.addCase(fetchAvailableLocales.fulfilled, (state, { payload }) => {
      state.availableLocales.isLoading = false;
      state.availableLocales.data = payload;
      state.availableLocales.errorCount = 0;
    });

    builder.addCase(fetchAvailableLocales.rejected, (state) => {
      state.availableLocales.isLoading = false;
      state.availableLocales.errorCount += 1;
    });
  },
});

export default settingsSlice.reducer;
export const { changeLocaleCode, changeThemeVariant, changeIsDrawerOpen } = settingsSlice.actions;
