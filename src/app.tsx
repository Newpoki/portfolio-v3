import { PaletteMode, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useCurrentTheme, useMinHeight } from "common";
import { Menu, Settings } from "layout";
import { darkTheme, lightTheme } from "themes";
import { Routes } from "routes";

const useStyles = makeStyles<{}, { minHeight: number; userTheme: PaletteMode }>(() => ({
  root: {
    maxHeight: "100vh",
    backgroundImage: ({ userTheme }) =>
      `url('${process.env.PUBLIC_URL}/images/bg-${userTheme}.png')`,
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  app: {
    minHeight: ({ minHeight }) => minHeight,
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
}));

export const App = () => {
  /* Vars */

  const minHeight = useMinHeight();
  const theme = useCurrentTheme();
  const classes = useStyles({ minHeight, userTheme: theme });

  /* Render */

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className={classes.root}>
        <div className={classes.app}>
          <Menu />
          <Routes />
          <Settings />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
