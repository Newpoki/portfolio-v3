import { createTheme, Theme } from "@material-ui/core";

// These styles are both common to dark and light themes
export const getBaseTheme = (theme: Theme) =>
  createTheme({
    components: {
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
        styleOverrides: {
          root: {
            padding: theme.spacing(2),
            boxShadow: "none",
            background: "none",
          },
        },
      },

      MuiTypography: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.main,
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        iphone5S: 320,
        iphone6: 375,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
