import { BreakpointOverrides } from "@material-ui/core";

declare module "@material-ui/core" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    iphone5S: true;
    iphone6: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

declare module "@material-ui/core/createTheme" {
  interface Theme {
    breakpoints: BreakpointOverrides;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    breakpoints?: BreakpointOverrides;
  }
}
