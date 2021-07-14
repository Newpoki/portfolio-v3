export { store } from "./store";
export type { AppDispatch, RootState } from "./store";

export * from "./settings/settings-selectors";
export { changeCurrentTheme } from "./settings/settings-slice";
export type { IThemeVariant } from "./settings/settings-slice";
