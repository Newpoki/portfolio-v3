import * as ls from "local-storage";

import { ILocaleCode } from "~common";
import { CURRENT_LOCALE_LS_KEY, DEFAULT_LOCALE_CODE } from "./settings-constants";

// TODO: Ajouter TU

/**
 * Determine the app default language on the first load
 * @returns
 */
export const getDefaultLocaleCode = () => {
  const localeCodeFromLS = ls.get<ILocaleCode | null>(CURRENT_LOCALE_LS_KEY);

  if (localeCodeFromLS) {
    return localeCodeFromLS;
  }

  const navigatorLanguage = navigator.language;

  // We can't use the raw navigatorLanguage as it may be fr-FR, fr-CA, fr-BE or even fr
  // and our backend only supports translation for fr-FR. This is the same for english,
  // it only supports en-GB and it may be, en-US, en, etc
  if (navigatorLanguage?.includes("fr")) {
    ls.set(CURRENT_LOCALE_LS_KEY, "fr-FR");
    return "fr-FR";
  }

  if (navigatorLanguage?.includes("en")) {
    ls.set(CURRENT_LOCALE_LS_KEY, "en-GB");
    return "en-GB";
  }

  return DEFAULT_LOCALE_CODE;
};
