import { api } from "common";
import { selector } from "recoil";
import { currentLocaleCodeAtom } from "../settings/settings-atoms";
import { homeDataToken } from "./home-atoms";
import { IHomeData } from "./interfaces";

export const selectHomeData = selector<IHomeData | undefined>({
  key: "selectHomeData",
  get: async ({ get }) => {
    try {
      get(homeDataToken);

      const locale = get(currentLocaleCodeAtom);
      const response = await api<IHomeData>({
        method: "get",
        url: "/home",
        params: {
          _locale: locale,
        },
      });

      return response.data;
    } catch (err) {
      console.log({ err });
      throw err;
    }
  },
});
