import { purple } from "@material-ui/core/colors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { Overrides } from "@material-ui/core/styles/overrides";

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

export const theme = {
  palette: palette as PaletteOptions,

  overrides: {
    // MuiIconButton: {
    //   colorPrimary: {
    //     color: palette.primary.main,
    //   },
    //   label: {
    //     display: "flex",
    //   },
    // },
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
    MuiSwitch: {
      switchBase: {
        color: purple[300],
        "&$checked": {
          color: purple[500],
        },
        "&$checked + $track": {
          backgroundColor: purple[500],
        },
      },
      checked: {},
      track: {},
    },
  } as Overrides,
};
