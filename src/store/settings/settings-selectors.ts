import { RootState } from "../store";

export const selectCurrentTheme = (state: RootState) => {
  return state.settings.theme;
};
