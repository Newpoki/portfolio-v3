import { PaletteMode } from "@material-ui/core";

export type IThemeVariant = PaletteMode | "system";

export type ILocaleCode = "fr-FR" | "en-GB";

export interface ILocale {
  code: ILocaleCode;
  name: string;
}
