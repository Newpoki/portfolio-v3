import { atom } from "recoil";
import * as ls from "local-storage";

import { getDefaultLocaleCode } from "./settings-utils";
import { THEME_LS_KEY } from "./settings-constants";
import { ILocaleCode, IThemeVariant } from "./interfaces";

export const currentLocaleCodeAtom = atom<ILocaleCode>({
  key: "currentLocaleCodeAtom",
  default: getDefaultLocaleCode(),
});

export const currentThemeAtom = atom<IThemeVariant>({
  key: "currentThemeAtom",
  default: ls.get(THEME_LS_KEY) ?? "system",
});

export const drawerAtom = atom({
  key: "drawer",
  default: false,
});
