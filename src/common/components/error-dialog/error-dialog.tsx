import { Dialog } from "@material-ui/core";
import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { errorDialogAtom } from "store";

interface IErrorDialogProps {
  children: ReactNode;
}

export const ErrorDialog = ({ children }: IErrorDialogProps) => {
  /* Store */

  const { isOpen } = useRecoilValue(errorDialogAtom);

  /* Render */

  return <Dialog open={isOpen}>{children}</Dialog>;
};
