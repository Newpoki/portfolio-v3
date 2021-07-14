import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useAppSelector, useMinHeight } from "common";
import { Header } from "layout";
import { darkTheme, lightTheme } from "themes";
import { Home } from "home";
import { IThemeVariant, selectCurrentTheme } from "store";

const useStyles = makeStyles<{}, { minHeight: number; userTheme: IThemeVariant }>(() => ({
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
  /* Store */

  const currentTheme = useAppSelector(selectCurrentTheme);

  /* Vars */

  const minHeight = useMinHeight();
  const classes = useStyles({ minHeight, userTheme: currentTheme });

  /* Render */

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <div className={classes.root}>
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
