import { atom } from "recoil";

export interface ISelectorToken {
  attempt: number;
  value: number;
}

export const homeDataToken = atom<ISelectorToken>({
  key: "homeDataToken",
  default: {
    attempt: 0,
    value: 0,
  },
});
