import { PaletteMode, useMediaQuery } from "@material-ui/core";
import { selectCurrentTheme } from "store";
import { useAppSelector } from "./use-app-selector";

export const useCurrentTheme = (): PaletteMode => {
  /* Store */

  const currentTheme = useAppSelector(selectCurrentTheme);

  /* Vars */

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  if (currentTheme === "system") {
    return prefersDarkMode ? "dark" : "light";
  }

  return currentTheme;
};
