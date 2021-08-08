import { atom } from "recoil";
import { ISelectorToken } from "../interfaces";

export const homeDataToken = atom<ISelectorToken>({
  key: "homeDataToken",
  default: {
    attempt: 0,
    value: 0,
  },
});
