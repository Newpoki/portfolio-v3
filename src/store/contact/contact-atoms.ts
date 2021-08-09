import { atom } from "recoil";
import { ISelectorToken } from "store/interfaces";

export const contactDataToken = atom<ISelectorToken>({
  key: "contactDataToken",
  default: {
    value: 0,
    attempt: 0,
  },
});
