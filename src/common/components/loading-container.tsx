interface ILoadingContainerProps<TData> {
  data: TData | undefined;
  isLoading: boolean;
  loader: JSX.Element;
  children: ({ data }: { data: TData }) => JSX.Element;
}

export function LoadingContainer<TData>({
  data,
  isLoading,
  loader,
  children,
}: ILoadingContainerProps<TData>) {
  if (isLoading) return loader;

  // We can assert that if it's not loading, the data is here.
  return children({ data: data as TData });
}
