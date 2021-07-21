import { initReactI18next } from "react-i18next";
import * as ls from "local-storage";
import i18n from "i18next";
import LanguageDetector, { CustomDetector } from "i18next-browser-languagedetector";

import { frFRTranslation } from "./fr-FR/fr-FR";
import { enGBTranslation } from "./en-GB/en-GB";
import { CURRENT_LOCALE_LS_KEY, DEFAULT_LOCALE_CODE, ILocaleCode } from "store";

// This custom detector is needed because otherwise, it can store a language like
// fr, fr-CA, fr-BE, etc and our backend only support fr-FR, so we can't rely  on what the detector returns
const customLanguageDetector: CustomDetector = {
  name: "customLanguageDetector",

  lookup(): ILocaleCode {
    // i18n init happen AFTER redux store init, and in redux store init
    // We've ALWAYS already defined and put in local storage a locale code.
    const localeCodeFromLS = ls.get<ILocaleCode>(CURRENT_LOCALE_LS_KEY);

    return localeCodeFromLS;
  },
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector(customLanguageDetector);

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LOCALE_CODE,
    resources: {
      "en-GB": enGBTranslation,
      "fr-FR": frFRTranslation,
    },
    defaultNS: "HOME",
    detection: {
      order: [customLanguageDetector.name],
      lookupLocalStorage: CURRENT_LOCALE_LS_KEY,
      caches: ["localStorage"],
    },
  });

export { i18n as i18nInstance };
