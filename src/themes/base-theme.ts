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
            boxShadow: "none",
            padding: theme.spacing(2),
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
  });
