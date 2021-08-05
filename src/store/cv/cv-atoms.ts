import { atom } from "recoil";
import { ISelectorToken } from "store/home/home-atoms";

export const cvDataToken = atom<ISelectorToken>({
  key: "cvDataToken",
  default: {
    attempt: 0,
    value: 0,
  },
});
