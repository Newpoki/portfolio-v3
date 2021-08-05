import { api, ISortOrder } from "common";
import { selectorFamily } from "recoil";
import { currentLocaleCodeAtom } from "../settings/settings-atoms";

interface ICvPlace {
  city: string;
  country: string;
}

type ICvExperienceType = "work" | "diploma" | "birth";

export interface ICvData {
  title: string;
  content: string;
  place: ICvPlace;
  startedAt: string;
  endedAt: string | undefined;
  type: ICvExperienceType;
}

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
        throw err;
      }
    },
});
