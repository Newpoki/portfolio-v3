import { atom } from "recoil";
import { ISelectorToken } from "../interfaces";
import { ICvExperienceType } from "./cv-selectors";

export const cvDataToken = atom<ISelectorToken>({
  key: "cvDataToken",
  default: {
    attempt: 0,
    value: 0,
  },
});

export type ICvFilter = Omit<ICvExperienceType, "birth"> | undefined;

export const cvFilterAtom = atom<ICvFilter>({
  key: "cvFilterAtom",
  default: undefined,
});
