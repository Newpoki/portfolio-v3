import { PaletteOptions } from "@material-ui/core/styles/createPalette";

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

export const theme = {
  palette: palette as PaletteOptions,

  overrides: {
    MuiIconButton: {
      colorPrimary: {
        color: palette.primary.main,
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "transparent",
      },
      root: {
        color: palette.primary.main,
        boxShadow: "none",
      },
    },
    MuiTypography: {
      root: {
        color: palette.primary.main,
      },
    },
  },
};
