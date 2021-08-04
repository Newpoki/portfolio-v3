import { api } from "common";
import { selector } from "recoil";
import { currentLocaleCodeAtom } from "../settings/settings-atoms";

interface IHomeData {
  name: string;
  job_title: string;
  job_libraries: string;
}

export const selectHomeData = selector({
  key: "selectHomeData",
  get: async ({ get }) => {
    const locale = get(currentLocaleCodeAtom);

    try {
      const response = await api<IHomeData>({
        method: "get",
        url: "/home",
        params: {
          _locale: locale,
        },
      });

      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
});
