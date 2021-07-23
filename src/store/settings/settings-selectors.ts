import { IRootState } from "../store";

/**
 * Returns the application current theme
 */
export const selectCurrentTheme = (state: IRootState) => {
  return state.settings.theme;
};

/**
 * Returns the application available locales
 */
export const selectAvailableLocales = (state: IRootState) => {
  return state.settings.locales.data;
};

/**
 * Returns the available locales loading state
 */
export const selectIsLoadingAvailableLocales = (state: IRootState) => {
  return state.settings.locales.isLoading;
};

/**
 * Returns the current locale code
 */
export const selectCurrentLocaleCode = (state: IRootState) => {
  return state.settings.locales.currentCode;
};

/**
 * Returns the drawer open state
 */
export const selectIsDrawerOpen = (state: IRootState) => {
  return state.settings.drawer.isOpen;
};
