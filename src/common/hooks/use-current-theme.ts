import { PaletteMode, useMediaQuery } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { currentThemeAtom } from "store";

export const useCurrentTheme = (): PaletteMode => {
  /* Store */

  const currentTheme = useRecoilValue(currentThemeAtom);

  /* Vars */

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  if (currentTheme === "system") {
    return prefersDarkMode ? "dark" : "light";
  }

  return currentTheme;
};
