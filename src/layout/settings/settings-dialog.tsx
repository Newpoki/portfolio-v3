import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@material-ui/core";
import {
  Brightness7 as SunIcon,
  Brightness4 as MoonIcon,
  SettingsBrightness as SystemIcon,
} from "@material-ui/icons";
import { MouseEvent, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as ls from "local-storage";

import { useAppDispatch, useAppSelector } from "common";
import {
  changeCurrentLocaleCode,
  changeCurrentTheme,
  CURRENT_LOCALE_LS_KEY,
  DEFAULT_LOCALE_CODE,
  IThemeVariant,
  selectAvailableLocales,
  selectCurrentLocaleCode,
  selectCurrentTheme,
  selectIsLoadingAvailableLocales,
  THEME_LS_KEY,
} from "store";
import { ILocaleOption } from "./settings";

interface ISettingsDialogProps {
  isDialogOpen: boolean;
  toggleIsDialogOpen: (isDialogOpen: boolean) => void;
}

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

export const SettingsDialog = ({ isDialogOpen, toggleIsDialogOpen }: ISettingsDialogProps) => {
  /* Store */

  const isLoadingAvailableLocales = useAppSelector(selectIsLoadingAvailableLocales);
  const currentTheme = useAppSelector(selectCurrentTheme);
  const availableLocales = useAppSelector(selectAvailableLocales);
  const currentLocaleCode = useAppSelector(selectCurrentLocaleCode);

  /* Vars */

  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  /* Memos */

  const localesOptions: Array<ILocaleOption> = useMemo(() => {
    return (
      availableLocales?.map((locale) => {
        return {
          ...locale,
          label: locale.name,
          // Trying to recreate an ISO 3166-1 alpha-2 locale code
          flagKey: locale.code.split("-")[1] ?? locale.code.split("-")[0],
        };
      }) ?? []
    );
  }, [availableLocales]);

  const currentLocale = useMemo(
    () => localesOptions.find((locale) => locale.code === currentLocaleCode),
    [currentLocaleCode, localesOptions]
  );

  /* Callbacks */

  /**
   * Change the theme of the application and save it in local-storage
   */
  const handleThemeButtonsClick = useCallback(
    (evt: MouseEvent<HTMLElement>, value: IThemeVariant) => {
      dispatch(changeCurrentTheme({ theme: value }));
      ls.set(THEME_LS_KEY, value);
    },
    [dispatch]
  );

  /**
   * Handle material ui dialog internal closing system
   */
  const onDialogClose = useCallback(
    (evt: MouseEvent<HTMLDivElement>, reason: "backdropClick" | "escapeKeyDown") => {
      if (reason !== "backdropClick") {
        toggleIsDialogOpen(false);
      }
    },
    [toggleIsDialogOpen]
  );

  /**
   * Close the dialog
   */
  const onCloseButtonClick = useCallback(() => {
    toggleIsDialogOpen(false);
  }, [toggleIsDialogOpen]);

  /**
   * Change the current locale code in the store + i18n instance
   * and save it in localStorage
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

  /* Render */

  if (isLoadingAvailableLocales || !availableLocales || !currentLocale) {
    return null;
  }

  return (
    <Dialog
      open={isDialogOpen}
      onClose={onDialogClose}
      aria-labelledby="settings-dialog"
      aria-describedby="allow-user-to-change-theme-and-language"
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
  );
};
