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
  changeLocaleCode,
  changeThemeVariant,
  fetchAvailableLocales,
  selectAvailableLocalesErrorCount,
  selectIsLoadingAvailableLocales,
  selectThemeVariant,
  useDispatch,
  useSelector,
} from "store";

import {
  CURRENT_LOCALE_LS_KEY,
  DEFAULT_LOCALE_CODE,
  ILocale,
  IThemeVariant,
  selectAvailableLocales,
  selectLocaleCode,
  THEME_LS_KEY,
} from "store";
import { SettingsDialogSkeleton } from "./settings-dialog-skeleton";
import { LoadingContainer } from "common";
import { useEffect } from "react";

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

  const themeVariant = useSelector(selectThemeVariant);
  const availableLocales = useSelector(selectAvailableLocales);
  const isLoadingAvailableLocales = useSelector(selectIsLoadingAvailableLocales);
  const availableLocalesErrorCount = useSelector(selectAvailableLocalesErrorCount);
  const localeCode = useSelector(selectLocaleCode);

  /* Vars */

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isUnderSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isIPhone6OrSmaller = useMediaQuery(theme.breakpoints.down("iphone6"));

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
    () => localesOptions.find((locale) => locale.code === localeCode),
    [localeCode, localesOptions]
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
        dispatch(changeThemeVariant({ themeVariant: value }));
        ls.set(THEME_LS_KEY, value);
      }
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

      dispatch(changeLocaleCode({ localeCode: newLocaleCode }));
      ls.set(CURRENT_LOCALE_LS_KEY, newLocaleCode);
      i18n.changeLanguage(newLocaleCode);
    },
    [dispatch, i18n]
  );

  const handleRetry = useCallback(() => {
    dispatch(fetchAvailableLocales());
  }, [dispatch]);

  /* Effects */

  /** Fetch the available locales when opening the dialog for the first time */
  useEffect(() => {
    if (!availableLocales) {
      dispatch(fetchAvailableLocales());
    }
  }, [availableLocales, dispatch]);

  /* Render */

  return (
    <LoadingContainer
      loader={<SettingsDialogSkeleton isDisplayed={isDialogOpen} />}
      isLoading={isLoadingAvailableLocales}
      data={availableLocales}
      errorCount={availableLocalesErrorCount}
      onRetry={handleRetry}
    >
      {({ data }) => {
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
                value={themeVariant}
                sx={{ marginBottom: 3 }}
              >
                <ToggleButton value="light" aria-label="left aligned">
                  <SunIcon
                    sx={{
                      marginRight: 1,
                      fontSize: isIPhone6OrSmaller ? "1rem" : "1.5rem",
                      mr: isIPhone6OrSmaller ? 0.5 : 1,
                    }}
                  />
                  <Typography sx={{ fontSize: isIPhone6OrSmaller ? 12 : 16 }}>
                    {t("SETTINGS:DIALOG.THEME.LIGHT")}
                  </Typography>
                </ToggleButton>

                <ToggleButton value="system" aria-label="centered">
                  <SystemIcon
                    sx={{
                      marginRight: 1,
                      fontSize: isIPhone6OrSmaller ? "1rem" : "1.5rem",
                      mr: isIPhone6OrSmaller ? 0.5 : 1,
                    }}
                  />
                  <Typography sx={{ fontSize: isIPhone6OrSmaller ? 12 : 16 }}>
                    {t("SETTINGS:DIALOG.THEME.SYSTEM")}
                  </Typography>
                </ToggleButton>

                <ToggleButton value="dark" aria-label="right aligned">
                  <MoonIcon
                    sx={{
                      marginRight: 1,
                      fontSize: isIPhone6OrSmaller ? "1rem" : "1.5rem",
                      mr: isIPhone6OrSmaller ? 0.5 : 1,
                    }}
                  />
                  <Typography sx={{ fontSize: isIPhone6OrSmaller ? 12 : 16 }}>
                    {t("SETTINGS:DIALOG.THEME.DARK")}
                  </Typography>
                </ToggleButton>
              </ToggleButtonGroup>

              <Typography sx={{ marginBottom: 1 }}>
                {t("SETTINGS:DIALOG.LANGUAGE.TITLE")}
              </Typography>

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
                      startAdornment: currentLocale?.flagKey
                        ? countryToFlag(currentLocale.flagKey)
                        : undefined,
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
      }}
    </LoadingContainer>
  );
};
