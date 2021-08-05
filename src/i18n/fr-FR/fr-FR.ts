import { frFRCommonTranslations } from "./common";
import { frFRCvTranslations } from "./cv";
import { frFRErrorTranslations } from "./error";
import { frFRMenuTranslations } from "./menu";
import { frFRSettingsTranslations } from "./settings";

export const frFRTranslation = {
  ...frFRMenuTranslations,
  ...frFRSettingsTranslations,
  ...frFRCvTranslations,
  ...frFRCommonTranslations,
  ...frFRErrorTranslations,
};
