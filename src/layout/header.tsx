import { AppBar, Toolbar, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: theme.palette.primary.main,
    fontVariant: "small-caps",
    textDecoration: "none",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 25,
    opacity: 0.8,
  },
}));

export const Header = () => {
  /* Vars */

  const classes = useStyles();

  /* Render */

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ justifyContent: "center", flexDirection: "row" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", width: 600 }}>
        <NavLink to="/" className={classes.link}>
          home
        </NavLink>
        <NavLink to="/timeline" className={classes.link}>
          timeline
        </NavLink>
        <NavLink to="/cv" className={classes.link}>
          mon cv
        </NavLink>
        <NavLink to="/contact" className={classes.link}>
          contactez moi
        </NavLink>

        {/* <FormControlLabel
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
        /> */}
      </Toolbar>
    </AppBar>
  );
};
