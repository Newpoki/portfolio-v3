import { atom } from "recoil";

export const errorDialogAtom = atom({
  key: "error-dialog-atom",
  default: {
    isOpen: false,
  },
});
