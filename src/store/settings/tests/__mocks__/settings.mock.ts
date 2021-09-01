import { mockedGenericApiResponse } from "~common";
import { ILocale } from "../../interfaces";

export const mockedFetchAvailableLocalesResponse: Array<ILocale> = [
  { code: "en-GB", name: "The en-GB locale name", isDefault: false, ...mockedGenericApiResponse },
  { code: "fr-FR", name: "The fr-FR locale name", isDefault: true, ...mockedGenericApiResponse },
];
