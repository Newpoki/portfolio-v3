import { enGBCommonTranslations } from "./common";
import { enGBCvTranslations } from "./cv";
import { enGBMenuTranslations } from "./menu";
import { enGBSettingsTranslations } from "./settings";
import { enGBErrorTranslations } from "./error";

export const enGBTranslation = {
  ...enGBMenuTranslations,
  ...enGBSettingsTranslations,
  ...enGBCvTranslations,
  ...enGBCommonTranslations,
  ...enGBErrorTranslations,
};
