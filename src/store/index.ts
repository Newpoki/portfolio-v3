export { store } from "./store";
export type { AppDispatch, IRootState } from "./store";

// SETTINGS
export * from "./settings/settings-selectors";
export * from "./settings/settings-constants";
export { changeCurrentTheme } from "./settings/settings-slice";
export type { IThemeVariant } from "./settings/settings-slice";

// HOME
export * from "./home/home-selectors";
export { getHomeData } from "./home/home-slice";
