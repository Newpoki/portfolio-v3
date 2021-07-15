import { MouseEvent, useCallback, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Theme,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  Settings as SettingsIcon,
  Brightness7 as SunIcon,
  Brightness4 as MoonIcon,
  SettingsBrightness as SystemIcon,
} from "@material-ui/icons";

import { useAppDispatch, useAppSelector } from "common";
import { changeCurrentTheme, IThemeVariant, selectCurrentTheme } from "store";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}));
export const Settings = () => {
  /* Store */

  const currentTheme = useAppSelector(selectCurrentTheme);

  /* Vars */

  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [isDialogOpen, toggleIsDialogOpen] = useState(false);

  /* Callbacks */

  const handleDialogClick = useCallback(() => {
    console.log("allo");
    toggleIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen]);

  const handleThemeButtonsClick = useCallback(
    (evt: MouseEvent<HTMLElement>, newTheme: IThemeVariant) => {
      dispatch(changeCurrentTheme({ theme: newTheme }));
    },
    [dispatch]
  );

  const onDialogClose = useCallback(
    (evt: MouseEvent<HTMLDivElement>, reason: "backdropClick" | "escapeKeyDown") => {
      if (reason !== "backdropClick") {
        toggleIsDialogOpen(false);
      }
    },
    []
  );

  const onCloseButtonClick = useCallback(() => {
    toggleIsDialogOpen(false);
  }, []);

  /* Render */

  return (
    <>
      <div className={classes.root}>
        <Fab color="primary" onClick={handleDialogClick}>
          <SettingsIcon />
        </Fab>
      </div>

      <Dialog
        open={isDialogOpen}
        onClose={onDialogClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        color="primary"
      >
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <Typography marginBottom={1}>Choix du theme</Typography>

          <ToggleButtonGroup
            exclusive
            onChange={handleThemeButtonsClick}
            aria-label="text alignment"
            value={currentTheme}
          >
            <ToggleButton value="light" aria-label="left aligned">
              <SunIcon sx={{ mr: 1 }} />
              <span>light</span>
            </ToggleButton>

            <ToggleButton value="system" aria-label="centered">
              <SystemIcon sx={{ mr: 1 }} />
              <span>System</span>
            </ToggleButton>

            <ToggleButton value="dark" aria-label="right aligned">
              <MoonIcon sx={{ mr: 1 }} />
              <span>dark</span>
            </ToggleButton>
          </ToggleButtonGroup>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={onCloseButtonClick} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
