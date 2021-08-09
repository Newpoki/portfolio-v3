import { selector } from "recoil";

import { api } from "common";
import { IContactData } from "./interfaces";
import { currentLocaleCodeAtom } from "store/settings/settings-atoms";

export const selectContactData = selector<IContactData | undefined>({
  key: "selectContactData",
  get: async ({ get }) => {
    const locale = get(currentLocaleCodeAtom);

    try {
      const response = await api<IContactData>({
        method: "get",
        url: "/contact",
        params: {
          _locale: locale,
        },
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  },
});
