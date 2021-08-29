import { IRootState } from "../interfaces";

/** Returns the current localeCode */
export const selectLocaleCode = (state: IRootState) => {
  return state.settings.localeCode;
};

/** Returns the current theme variant */
export const selectThemeVariant = (state: IRootState) => {
  return state.settings.themeVariant;
};

/** Returns the drawer open state */
export const selectIsDrawerOpen = (state: IRootState) => {
  return state.settings.isDrawerOpen;
};

/** Returns the available locales */
export const selectAvailableLocales = (state: IRootState) => {
  return state.settings.availableLocales.data;
};

/** Returns the available locales loading state */
export const selectIsLoadingAvailableLocales = (state: IRootState) => {
  return state.settings.availableLocales.isLoading;
};

/** Returns the available locales error count */
export const selectAvailableLocalesErrorCount = (state: IRootState) => {
  return state.settings.availableLocales.errorCount;
};
