import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMinHeight } from "common";
import { Header } from "layout";
import React, { useState } from "react";
import { darkTheme, lightTheme } from "themes";
import { Home } from "home";

const useStyles = makeStyles<{}, { minHeight: number; userTheme: "light" | "dark" }>(() => ({
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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const classes = useStyles({ minHeight, userTheme: theme });

  /* Render */

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className={classes.root}>
        <Header theme={theme} setTheme={setTheme} />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
