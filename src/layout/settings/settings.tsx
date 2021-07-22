import { useCallback, useState } from "react";
import { Fab, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Settings as SettingsIcon } from "@material-ui/icons";

import { SettingsDialog } from "./settings-dialog";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}));

export const Settings = () => {
  /* Vars */

  const classes = useStyles();
  const [isDialogOpen, toggleIsDialogOpen] = useState(false);

  /* Callbacks */

  /** Open or close the settings dialog */
  const handleSettingsIconClick = useCallback(() => {
    toggleIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen]);

  return (
    <>
      <div className={classes.root}>
        <Fab color="primary" onClick={handleSettingsIconClick} aria-label="settings">
          <SettingsIcon />
        </Fab>
      </div>

      <SettingsDialog isDialogOpen={isDialogOpen} toggleIsDialogOpen={toggleIsDialogOpen} />
    </>
  );
};
