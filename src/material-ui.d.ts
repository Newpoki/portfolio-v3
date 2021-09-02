import { BreakpointOverrides } from "@material-ui/core";

/** Add the iphone5S and iphone6 breakpoints to the `BreakpointOverrides` material ui interface */
declare module "@material-ui/core" {
  interface BreakpointOverrides {
    xs: true;
    iphone5S: true;
    iphone6: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

/** Add the overrides `BreakpointOverrides` interface to the `Theme` and `ThemeOptions` interfaces to be able to use them from the theme */
declare module "@material-ui/core/createTheme" {
  interface Theme {
    breakpoints: BreakpointOverrides;
  }

  interface ThemeOptions {
    breakpoints?: BreakpointOverrides;
  }
}
