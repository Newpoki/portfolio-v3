import { api } from "common";
import { selector } from "recoil";
import { ILocale } from "./interfaces";

export const selectAvailableLocales = selector<ILocale[] | undefined>({
  key: "selectAvailableLocales",
  get: async () => {
    try {
      const response = await api<ILocale[]>({
        method: "get",
        url: "/i18n/locales",
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  },
});
