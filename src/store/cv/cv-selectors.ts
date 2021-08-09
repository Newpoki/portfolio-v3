import { api } from "common";
import { selectorFamily } from "recoil";
import { currentLocaleCodeAtom } from "../settings/settings-atoms";
import { cvFilterAtom } from "./cv-atoms";
import { ICvData, ISelectCvParams } from "./interfaces";

export const selectCvData = selectorFamily<Array<ICvData> | undefined, ISelectCvParams>({
  key: "selectCvData",
  get:
    ({ sort, order }) =>
    async ({ get }) => {
      try {
        const locale = get(currentLocaleCodeAtom);
        const filter = get(cvFilterAtom);

        const response = await api<Array<ICvData>>({
          method: "get",
          url: "/cvs",
          params: {
            _locale: locale,
            _sort: `${sort}:${order}`,
            type_eq: filter,
          },
        });

        return response.data;
      } catch (err) {
        throw err;
      }
    },
});
