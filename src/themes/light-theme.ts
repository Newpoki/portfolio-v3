import { createTheme } from "@material-ui/core";

import { getBaseTheme } from "./base-theme";

const palette = {
  type: "dark",
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
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    selected: "rgba(0, 0, 0, 0.08)",
    disabled: "rgba(0, 0, 0, 0.26",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
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
  ...partialLightTheme,
  ...baseTheme,
  components: {
    ...baseTheme.components,
  },
});
