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
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  Brightness7 as SunIcon,
  Brightness4 as MoonIcon,
  SettingsBrightness as SystemIcon,
} from "@material-ui/icons";
import { MouseEvent, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as ls from "local-storage";

import {
  CURRENT_LOCALE_LS_KEY,
  DEFAULT_LOCALE_CODE,
  ILocale,
  IThemeVariant,
  selectAvailableLocales,
  THEME_LS_KEY,
} from "store";
import { SettingsDialogSkeleton } from "./settings-dialog-skeleton";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { currentLocaleCodeAtom, currentThemeAtom } from "store";

interface ILocaleOption extends ILocale {
  label: ILocale["name"];
  flagKey: string;
}
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

  const [currentTheme, changeCurrentTheme] = useRecoilState(currentThemeAtom);
  const [currentLocaleCode, changeCurrentLocaleCode] = useRecoilState(currentLocaleCodeAtom);
  const availableLocalesLoadable = useRecoilValueLoadable(selectAvailableLocales);
  const isLoadingAvailableLocales = availableLocalesLoadable.state === "loading";
  const availableLocales = availableLocalesLoadable.valueMaybe();

  /* Vars */

  // const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isUnderSm = useMediaQuery(theme.breakpoints.down("sm"));

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
   * Change the theme of the application and save it in local-storage.
   *
   * `value` can be null as the value comes from ToggleButtonGroup component with exclusive prop.
   * It means that if user select the already selected option, it returns null.
   */
  const handleThemeButtonsClick = useCallback(
    (evt: MouseEvent<HTMLElement>, value: IThemeVariant | null) => {
      if (value) {
        // dispatch(changeCurrentTheme({ theme: value }));
        changeCurrentTheme(value);
        ls.set(THEME_LS_KEY, value);
      }
    },
    [changeCurrentTheme]
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

      changeCurrentLocaleCode(newLocaleCode);
      ls.set(CURRENT_LOCALE_LS_KEY, newLocaleCode);
      i18n.changeLanguage(newLocaleCode);
    },
    [changeCurrentLocaleCode, i18n]
  );

  /* Render */

  if (isLoadingAvailableLocales || !availableLocales || !currentLocale) {
    return <SettingsDialogSkeleton isDisplayed={isDialogOpen} />;
  }

  return (
    <Dialog
      open={isDialogOpen}
      onClose={onDialogClose}
      aria-labelledby={t("SETTINGS:DIALOG.ARIA.LABEL")}
      aria-describedby={t("SETTINGS:DIALOG.ARIA.DESCRIBED_BY")}
      color="primary"
      fullScreen={isUnderSm}
    >
      <DialogTitle>{t("SETTINGS:DIALOG.TITLE")}</DialogTitle>
      <DialogContent>
        <Typography sx={{ marginBottom: 1 }}>{t("SETTINGS:DIALOG.THEME.TITLE")}</Typography>

        <ToggleButtonGroup
          exclusive
          onChange={handleThemeButtonsClick}
          aria-label={t("SETTINGS:DIALOG.THEME.BUTTON_GROUP.ARIA.LABEL")}
          value={currentTheme}
          sx={{ marginBottom: 3 }}
        >
          <ToggleButton value="light" aria-label="left aligned">
            <SunIcon sx={{ marginRight: 1 }} />
            <span>{t("SETTINGS:DIALOG.THEME.LIGHT")}</span>
          </ToggleButton>

          <ToggleButton value="system" aria-label="centered">
            <SystemIcon sx={{ marginRight: 1 }} />
            <span>{t("SETTINGS:DIALOG.THEME.SYSTEM")}</span>
          </ToggleButton>

          <ToggleButton value="dark" aria-label="right aligned">
            <MoonIcon sx={{ marginRight: 1 }} />
            <span>{t("SETTINGS:DIALOG.THEME.DARK")}</span>
          </ToggleButton>
        </ToggleButtonGroup>

        <Typography sx={{ marginBottom: 1 }}>{t("SETTINGS:DIALOG.LANGUAGE.TITLE")}</Typography>

        <Autocomplete
          disablePortal
          options={localesOptions ?? []}
          value={currentLocale}
          onChange={handleLanguageChange}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label={t("SETTINGS:DIALOG.LANGUAGE.FIELD.LABEL")}
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
                <span aria-label={t("SETTINGS:DIALOG.LANGUAGE.FIELD.FLAG_ICON.ARIA.LABEL")}>
                  {countryToFlag(option.flagKey)}
                </span>
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
