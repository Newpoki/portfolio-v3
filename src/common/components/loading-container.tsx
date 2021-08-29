import { Dialog } from "@material-ui/core";
import { NetworkErrorDialog } from "./error-dialog/network-error-dialog";
import { TemporaryNetworkErrorDialog } from "./error-dialog/temporary-network-error-dialog";

interface ILoadingContainerProps<TData> {
  isLoading: boolean;
  data: TData | undefined;
  children: ({ data }: { data: TData }) => JSX.Element;
  errorCount: number;
  loader: JSX.Element;
  onRetry: () => void;
}

export function LoadingContainer<TData>({
  isLoading,
  children,
  loader,
  data,
  errorCount,
  onRetry,
}: ILoadingContainerProps<TData>) {
  /* Render */

  if (isLoading) {
    return loader;
  }

  if (errorCount > 0) {
    return (
      <Dialog open={true}>
        {errorCount <= 3 && (
          <TemporaryNetworkErrorDialog onRetry={onRetry} errorCount={errorCount} />
        )}
        {errorCount > 3 && <NetworkErrorDialog />}
      </Dialog>
    );
  }

  // We can assert that if it's not loading and have no error, the data is here.
  return children({ data: data as Required<TData> });
}
