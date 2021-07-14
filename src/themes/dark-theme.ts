import { createTheme } from "@material-ui/core";
import { getBaseTheme } from "./base-theme";

const palette = {
  type: "dark",
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
  action: {
    active: "#fff",
    hover: "rgba(255, 255, 255, 0.08)",
    selected: "rgba(255, 255, 255, 0.16)",
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
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
