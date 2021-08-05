import { useEffect } from "react";
import { Loadable, RecoilState, useRecoilState } from "recoil";
import { errorDialogAtom, ISelectorToken } from "store";

import { ErrorDialog } from "./error-dialog/error-dialog";
import { NetworkErrorDialog } from "./error-dialog/network-error-dialog";
import { TemporaryNetworkErrorDialog } from "./error-dialog/temporary-network-error-dialog";

interface ILoadingContainerProps<TData> {
  data: TData | undefined;
  loadables: Array<Loadable<TData | undefined>>;
  loader: JSX.Element;
  children: ({ data }: { data: TData }) => JSX.Element;
  token: RecoilState<ISelectorToken>;
}

export function LoadingContainer<TData>({
  data,
  loadables,
  loader,
  token,
  children,
}: ILoadingContainerProps<TData>) {
  /* Store */

  const [selectorToken, setSelectorToken] = useRecoilState(token);
  const [errorDialog, setErrorDialog] = useRecoilState(errorDialogAtom);

  /* Memos */

  const isLoading = loadables.some((loadable) => loadable.state === "loading");

  const hasError = loadables.some((loadable) => loadable.state === "hasError");

  const hasValue = loadables.every((loadable) => loadable.state === "hasValue");

  /* Effects */

  /** Open the error dialog if there is an error, if the dialog isn't opened yet,
   * and if it's the first time we would display it for this token
   */
  useEffect(() => {
    if (hasError && !errorDialog.isOpen && selectorToken.attempt === 0) {
      setErrorDialog({ ...errorDialog, isOpen: true });
    }
  }, [errorDialog, hasError, selectorToken.attempt, setErrorDialog]);

  /**
   * If the errorDialog is open, and there is a value, we can assume thats the retry succeeded
   * and so, reset the selectorToken attempt to 0 and close the dialog
   */
  useEffect(() => {
    if (hasValue && errorDialog.isOpen) {
      setSelectorToken({
        ...selectorToken,
        attempt: 0,
        value: selectorToken.value + 1,
      });

      setErrorDialog({
        isOpen: false,
      });
    }
  }, [errorDialog.isOpen, hasValue, selectorToken, setErrorDialog, setSelectorToken]);

  /* Render */

  if (isLoading) {
    return loader;
  }

  if (hasError) {
    return (
      <ErrorDialog>
        {selectorToken.attempt < 3 && <TemporaryNetworkErrorDialog token={token} />}
        {selectorToken.attempt >= 3 && <NetworkErrorDialog />}
      </ErrorDialog>
    );
  }

  // We can assert that if it's not loading and have no error, the data is here.
  return children({ data: data as TData });
}
