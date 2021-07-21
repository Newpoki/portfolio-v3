import { MouseEvent, useCallback, useState } from "react";
import * as ls from "local-storage";
import { useTranslation } from "react-i18next";
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  TextField,
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
import {
  changeCurrentTheme,
  IThemeVariant,
  selectAvailableLocales,
  selectCurrentLocaleCode,
  selectCurrentTheme,
  THEME_LS_KEY,
  changeCurrentLocaleCode,
  getAvailableLocales,
  ILocale,
  selectIsLoadingAvailableLocales,
  DEFAULT_LOCALE_CODE,
  CURRENT_LOCALE_LS_KEY,
} from "store";
import { useEffect } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}));

type ILocaleOption = ILocale & {
  label: ILocale["name"];
  flagKey: string;
};

/**
 * Convert an ISO 3166-1 alpha-2 locale code to flag char code
 * https://next.material-ui.com/components/autocomplete/#country-select
 */
function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

export const Settings = () => {
  /* Store */

  const currentTheme = useAppSelector(selectCurrentTheme);
  const availableLocales = useAppSelector(selectAvailableLocales);
  const currentLocaleCode = useAppSelector(selectCurrentLocaleCode);
  const isLoadingAvailableLocales = useAppSelector(selectIsLoadingAvailableLocales);

  /* Vars */

  const { i18n } = useTranslation();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [isDialogOpen, toggleIsDialogOpen] = useState(false);

  /* Memos */

  const localesOptions: Array<ILocaleOption> =
    availableLocales?.map((locale) => {
      return {
        ...locale,
        label: locale.name,
        flagKey: locale.code.split("-")[1] ?? locale.code.split("-")[0],
      };
    }) ?? [];

  const currentLocale = localesOptions.find((locale) => locale.code === currentLocaleCode);

  /* Callbacks */

  /** Open or close the settings dialog */
  const handleSettingsIconClick = useCallback(() => {
    toggleIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen]);

  /** Change the theme of the application and save it in local-storage */
  const handleThemeButtonsClick = useCallback(
    (evt: MouseEvent<HTMLElement>, value: IThemeVariant) => {
      dispatch(changeCurrentTheme({ theme: value }));
      ls.set(THEME_LS_KEY, value);
    },
    [dispatch]
  );

  /** Handle material ui dialog internal closing system  */
  const onDialogClose = useCallback(
    (evt: MouseEvent<HTMLDivElement>, reason: "backdropClick" | "escapeKeyDown") => {
      if (reason !== "backdropClick") {
        toggleIsDialogOpen(false);
      }
    },
    []
  );

  /** Close the dialog */
  const onCloseButtonClick = useCallback(() => {
    toggleIsDialogOpen(false);
  }, []);

  /**
   * Change the current locale code
   */
  const handleLanguageChange = useCallback(
    (evt, selectedOption: ILocaleOption | null) => {
      const newLocaleCode = selectedOption?.code ?? DEFAULT_LOCALE_CODE;

      dispatch(changeCurrentLocaleCode({ localeCode: newLocaleCode }));
      ls.set(CURRENT_LOCALE_LS_KEY, newLocaleCode);
      i18n.changeLanguage(newLocaleCode);
    },
    [dispatch, i18n]
  );

  /* Effects */

  useEffect(() => {
    dispatch(getAvailableLocales());
  }, [dispatch]);

  /* Render */

  if (isLoadingAvailableLocales || !availableLocales || !currentLocale) {
    return null;
  }

  return (
    <>
      <div className={classes.root}>
        <Fab color="primary" onClick={handleSettingsIconClick}>
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
          <Typography sx={{ marginBottom: 1 }}>Choix du theme</Typography>

          <ToggleButtonGroup
            exclusive
            onChange={handleThemeButtonsClick}
            aria-label="text alignment"
            value={currentTheme}
            sx={{ marginBottom: 3 }}
          >
            <ToggleButton value="light" aria-label="left aligned">
              <SunIcon sx={{ marginRight: 1 }} />
              <span>light</span>
            </ToggleButton>

            <ToggleButton value="system" aria-label="centered">
              <SystemIcon sx={{ marginRight: 1 }} />
              <span>System</span>
            </ToggleButton>

            <ToggleButton value="dark" aria-label="right aligned">
              <MoonIcon sx={{ marginRight: 1 }} />
              <span>dark</span>
            </ToggleButton>
          </ToggleButtonGroup>

          <Typography sx={{ marginBottom: 1 }}>Choix de la langue</Typography>

          <Autocomplete
            disablePortal
            options={localesOptions ?? []}
            sx={{ width: 300 }}
            value={currentLocale}
            onChange={handleLanguageChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Language"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: countryToFlag(currentLocale?.flagKey),
                }}
              />
            )}
            disableClearable
            renderOption={(props, option) => {
              return (
                <Box component="li" {...props}>
                  <span aria-label="country-flag-icon">{countryToFlag(option.flagKey)}</span>
                  <Typography sx={{ marginLeft: 1 }}>{option.label}</Typography>
                </Box>
              );
            }}
          />
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
