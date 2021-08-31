import { PaletteMode, useMediaQuery } from "@material-ui/core";

import { selectThemeVariant, useSelector } from "~store";

export const useCurrentTheme = (): PaletteMode => {
  /* Store */

  const themeVariant = useSelector(selectThemeVariant);

  /* Vars */

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  if (themeVariant === "system") {
    return prefersDarkMode ? "dark" : "light";
  }

  return themeVariant;
};
