import { createTheme, PaletteMode, PaletteOptions } from "@material-ui/core";
import { getBaseTheme } from "./base-theme";

const palette: PaletteOptions = {
  mode: "dark" as PaletteMode,
  primary: { main: "#fff" },
  secondary: { main: "rgba(255, 255, 255, 0.7)" },
  text: {
    disabled: "rgba(255, 255, 255, 0.5)",
    primary: "#fff",
    secondary: "rgba(255, 255, 255, 0.7)",
  },
  background: {
    default: "#303030",
    paper: "#424242",
  },
  divider: "rgba(255, 255, 255, 0.12)",
};

// We first create a theme only from palette in order to access
// spacing and other theme properties inside base theme
export const partialDarkTheme = createTheme({
  palette: palette,
});

const baseTheme = getBaseTheme(partialDarkTheme);

export const darkTheme = createTheme({
  ...baseTheme,
  ...partialDarkTheme,
  components: {
    ...baseTheme.components,
  },
});
