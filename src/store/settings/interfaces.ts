import { PaletteMode } from "@material-ui/core";

import { ILocaleCode } from "~common";

/**
 * The available themes based on material-ui palette
 */
export type IThemeVariant = PaletteMode | "system";

/**
 * A locale data defined
 */
export interface ILocale {
  /** The locale code is used by the i18n hooks and strapi i18n system */
  code: ILocaleCode;

  /** The name is only here for the display */
  name: string;
}

/** The payload from the action that changes the locale code */
export interface IChangeLocaleCodePayload {
  localeCode: ILocaleCode;
}

/** The payload from the action that changes the theme variant */
export interface IChangeThemeVariantPayload {
  themeVariant: IThemeVariant;
}

/** The payload from the action that change the drawer open state */
export interface IChangeIsDrawerOpenPayload {
  isDrawerOpen: boolean;
}

/** The available locales from strapi backend data and loading state */
interface IAvailableLocales {
  data: Array<ILocale> | undefined;
  isLoading: boolean;
  errorCount: number;
}

/**
 * The settings slice state
 */
export interface ISettingsState {
  /** The locale code used for i18n hooks and strapi content i18n */
  localeCode: ILocaleCode;

  /** The used theme variant*/
  themeVariant: IThemeVariant;

  /** Determine if the mobile drawer is open */
  isDrawerOpen: boolean;

  /** The available locales from strapi backend */
  availableLocales: IAvailableLocales;
}
