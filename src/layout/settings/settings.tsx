import { useEffect } from "react";
import { useCallback, useState } from "react";
import { Fab, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Settings as SettingsIcon } from "@material-ui/icons";

import { getAvailableLocales, ILocale } from "store";
import { useAppDispatch } from "common";
import { SettingsDialog } from "./settings-dialog";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}));

export type ILocaleOption = ILocale & {
  label: ILocale["name"];
  flagKey: string;
};

export const Settings = () => {
  /* Vars */

  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [isDialogOpen, toggleIsDialogOpen] = useState(false);

  /* Callbacks */

  /** Open or close the settings dialog */
  const handleSettingsIconClick = useCallback(() => {
    toggleIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen]);

  /* Effects */

  useEffect(() => {
    dispatch(getAvailableLocales());
  }, [dispatch]);

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
