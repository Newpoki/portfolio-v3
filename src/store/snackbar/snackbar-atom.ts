import { atom } from "recoil";

type ISnackbarType = "ERROR";

interface ISnackbar {
  id: string;
  message: string;
  type: ISnackbarType;
}

export const snackbarAtom = atom<ISnackbar | null>({
  key: "snackbarAtom",
  default: null,
});
