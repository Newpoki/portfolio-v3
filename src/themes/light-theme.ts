import { createTheme, PaletteMode, PaletteOptions } from "@material-ui/core";
import { IThemeVariant } from "store";

import { getBaseTheme } from "./base-theme";

const palette: PaletteOptions = {
  mode: "light" as IThemeVariant,
  primary: { main: "rgba(0, 0, 0, 0.87)" },
  secondary: { main: "rgba(0, 0, 0, 0.54)" },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    disabled: "rgba(0, 0, 0, 0.38)",
    secondary: "rgba(0, 0, 0, 0.54)",
  },
  background: {
    default: "#fafafa",
    paper: "#fff",
  },
  divider: "rgba(0, 0, 0, 0.12)",
};

// We first create a theme only from palette in order to access
// spacing and other theme properties inside base theme
const partialLightTheme = createTheme({
  palette: palette,
});

const baseTheme = getBaseTheme(partialLightTheme);

export const lightTheme = createTheme({
  ...baseTheme,
  ...partialLightTheme,
  components: {
    ...baseTheme.components,

    MuiButton: {
      styleOverrides: {
        root: {
          // backgroundColor: "red",
        },
        containedPrimary: {
          $root: {
            // backgroundColor: "red",
          },
        },

        // root: {
        //   backgroundColor: baseTheme.palette.background.paper,
        // },
        // containedPrimary: {
        //   backgroundColor: baseTheme.palette.background.paper,
        // },
      },
    },
  },
});
