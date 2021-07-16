import { IRootState } from "../store";

export const selectCurrentTheme = (state: IRootState) => {
  return state.settings.theme;
};
