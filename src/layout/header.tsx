import { ChangeEvent } from "react";
import { AppBar, Grid, Toolbar, Typography, Switch, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useAppDispatch, useAppSelector } from "common";
import { selectCurrentTheme, changeCurrentTheme } from "store";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  /* Store */

  const currentTheme = useAppSelector(selectCurrentTheme);

  /* Vars */

  const classes = useStyles();
  const dispatch = useAppDispatch();

  /* Callbacks */

  const handleCurrentThemeSwitch = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCurrentTheme({ theme: evt.target.value === "dark" ? "light" : "dark" }));
  };

  /* Render */

  return (
    <Grid container color="primary">
      <AppBar position="static" color="transparent" className={classes.root}>
        <Toolbar>
          <Typography variant="h6">Jason Savelli</Typography>

          <FormControlLabel
            control={
              <Switch
                checked={currentTheme === "dark"}
                onChange={handleCurrentThemeSwitch}
                name="theme-switch"
                value={currentTheme}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
            label={`Actual theme: ${currentTheme}`}
          />
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
