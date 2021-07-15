import { PaletteMode, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useCurrentTheme, useMinHeight } from "common";
import { Header, Settings } from "layout";
import { darkTheme, lightTheme } from "themes";
import { Routes } from "routes";

const useStyles = makeStyles<{}, { minHeight: number; userTheme: PaletteMode }>(() => ({
  root: {
    minHeight: ({ minHeight }) => minHeight,
    backgroundImage: ({ userTheme }) =>
      `url('${process.env.PUBLIC_URL}/images/bg-${userTheme}.png')`,
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
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
        <Header />
        <Routes />
        <Settings />
      </div>
    </ThemeProvider>
  );
};

export default App;
