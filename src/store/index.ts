export { store } from "./store";
export type { IAppDispatch, IRootState } from "./store";

// SETTINGS
export * from "./settings/settings-selectors";
export * from "./settings/settings-constants";
export {
  changeCurrentTheme,
  changeCurrentLocaleCode,
  getAvailableLocales,
  toggleDrawer,
} from "./settings/settings-slice";
export type { IThemeVariant, ILocale, ILocaleCode } from "./settings/settings-slice";

// HOME
export * from "./home/home-selectors";
export { getHomeData } from "./home/home-slice";
