import {
  AppBar,
  Grid,
  Theme,
  Toolbar,
  Typography,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ChangeEvent } from "react";

interface IHeaderProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = ({ theme, setTheme }: IHeaderProps) => {
  /* Vars */

  const classes = useStyles();

  /* Callbacks */

  const handleSwitch = (evt: ChangeEvent<HTMLInputElement>) => {
    setTheme(evt.target.checked ? "dark" : "light");
  };

  /* Render */

  return (
    <Grid container color="primary">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Jason Savelli
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={theme === "dark"}
                onChange={handleSwitch}
                name="checked"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
            label="Secondary"
          />
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
