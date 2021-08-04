import { api, ISortOrder } from "common";
import { selectorFamily } from "recoil";
import { currentLocaleCodeAtom } from "../settings/settings-atoms";
import { ICvData } from "./interfaces";

type ISelectCvParams = {
  sort: keyof ICvData;
  order: ISortOrder;
};

export const selectCvData = selectorFamily<Array<ICvData> | undefined, ISelectCvParams>({
  key: "selectCvData",
  get:
    ({ sort, order }) =>
    async ({ get }) => {
      try {
        const locale = get(currentLocaleCodeAtom);

        const response = await api<Array<ICvData>>({
          method: "get",
          url: "/cvs",
          params: {
            _locale: locale,
            _sort: `${sort}:${order}`,
          },
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
});
