import {
  AppBar,
  Button,
  createStyles,
  Grid,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  makeStyles,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { Menu as MenuIcon, WbSunny as SunIcon, NightsStay as MoonIcon } from "@material-ui/icons";
import { ChangeEvent } from "react";

interface IHeaderProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const Header = ({ theme, setTheme }: IHeaderProps) => {
  /* Vars */

  const classes = useStyles();

  /* Callbacks */

  const handleSwitch = (evt: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    console.log({ checked });
    setTheme(checked ? "dark" : "light");
  };

  /* Render */

  return (
    <Grid container color="primary">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={theme === "dark"}
                onChange={handleSwitch}
                name="checked"
                inputProps={{ "aria-label": "secondary checkbox" }}
                icon={<SunIcon />}
                checkedIcon={<MoonIcon />}
              />
            }
            label="Secondary"
          />
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
