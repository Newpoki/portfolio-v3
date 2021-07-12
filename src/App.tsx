import { createMuiTheme, Grid, makeStyles, ThemeProvider } from "@material-ui/core";

import { useMinHeight } from "common";
import { Header } from "layout";
import React, { useMemo, useState } from "react";
import { darkTheme, lightTheme } from "themes";

const useStyles = makeStyles<{}, { minHeight: number; userTheme: "light" | "dark" }>(() => ({
  root: {
    minHeight: ({ minHeight }) => minHeight,
    backgroundImage: ({ userTheme }) =>
      `url('${process.env.PUBLIC_URL}/images/bg-${userTheme}.png')`,
    transition: "0.3s",
  },
}));

const App = () => {
  /* Vars */

  const minHeight = useMinHeight();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const classes = useStyles({ minHeight, userTheme: theme });

  const userTheme = useMemo(
    () => createMuiTheme(theme === "light" ? lightTheme : darkTheme),
    [theme]
  );

  /* Render */

  return (
    <ThemeProvider theme={userTheme}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header theme={theme} setTheme={setTheme} />
          bijour la street
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
