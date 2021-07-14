import { ChangeEvent, MouseEvent, useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  Fab,
  FormControlLabel,
  Modal,
  Switch,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Settings as SettingsIcon } from "@material-ui/icons";

import { useAppDispatch, useAppSelector } from "common";
import { changeCurrentTheme, selectCurrentTheme } from "store";

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
    toggleIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen]);

  const handleCurrentThemeSwitch = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCurrentTheme({ theme: evt.target.value === "dark" ? "light" : "dark" }));
  };

  const handleDialogClose = useCallback(
    (evt: MouseEvent<HTMLDivElement>, reason: "backdropClick" | "escapeKeyDown") => {
      console.log({ reason });
      // Not working, must fix
      if (reason !== "backdropClick") {
        toggleIsDialogOpen(false);
      }
    },
    []
  );

  /* Render */

  return (
    <div className={classes.root}>
      <Fab color="primary" onClick={handleDialogClick}>
        <SettingsIcon />

        <Dialog
          open={isDialogOpen}
          onClose={handleDialogClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <DialogContent>
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
          </DialogContent>
        </Dialog>
      </Fab>
    </div>
  );
};
