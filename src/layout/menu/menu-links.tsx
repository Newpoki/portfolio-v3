import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: theme.palette.primary.main,
    fontVariant: "small-caps",
    fontWeight: theme.typography.fontWeightLight,
    textDecoration: "none",
    fontSize: 25,
    opacity: 0.9,
  },
}));

interface IMenuLinksProps {
  onClick: () => void;
}

export const MenuLinks = ({ onClick }: IMenuLinksProps) => {
  /* Vars */

  const classes = useStyles();
  const { t } = useTranslation("MENU");

  /* Render */

  return (
    <>
      <NavLink to="/" className={classes.link} onClick={onClick} exact>
        {t("MENU:LINK.HOME")}
      </NavLink>
      <NavLink to="/cv" className={classes.link} onClick={onClick} exact>
        {t("MENU:LINK.CV")}
      </NavLink>

      <NavLink to="/contact" className={classes.link} onClick={onClick} exact>
        {t("MENU:LINK.CONTACT")}
      </NavLink>
    </>
  );
};
