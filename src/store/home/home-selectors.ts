import { IRootState } from "../interfaces";

/** Returns the home data */
export const selectHomeData = (state: IRootState) => {
  return state.home.data;
};

/** Returns the home data loading state */
export const selectIsLoadingHomeData = (state: IRootState) => {
  return state.home.isLoading;
};

/** Returns the home data error count */
export const selectHomeDataErrorCount = (state: IRootState) => {
  return state.home.errorCount;
};
