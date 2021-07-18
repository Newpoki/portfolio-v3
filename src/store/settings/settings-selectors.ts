import { IRootState } from "../store";

/**
 * Return the application current theme
 */
export const selectCurrentTheme = (state: IRootState) => {
  return state.settings.theme;
};

/**
 * Return the application available locales
 */
export const selectAvailableLocales = (state: IRootState) => {
  return state.settings.locales.data;
};

/**
 * Return the available locales loading state
 */
export const selectIsLoadingAvailableLocales = (state: IRootState) => {
  return state.settings.locales.isLoading;
};

export const selectCurrentLocaleCode = (state: IRootState) => {
  return state.settings.locales.currentCode;
};
