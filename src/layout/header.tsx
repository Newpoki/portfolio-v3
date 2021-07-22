import { AppBar, Toolbar, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: theme.palette.primary.main,
    fontVariant: "small-caps",
    textDecoration: "none",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 25,
    opacity: 0.9,
  },
}));

export const Header = () => {
  /* Vars */

  const classes = useStyles();
  const { t } = useTranslation("HOME");

  /* Render */

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ justifyContent: "center", flexDirection: "row" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", width: 600 }}>
        <NavLink to="/" className={classes.link}>
          {t("HOME:MENU.HOME")}
        </NavLink>
        <NavLink to="/cv" className={classes.link}>
          {t("HOME:MENU.CV")}
        </NavLink>

        <NavLink to="/contact" className={classes.link}>
          {t("HOME:MENU.CONTACT")}
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
