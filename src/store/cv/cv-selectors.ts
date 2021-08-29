import { IRootState } from "store/interfaces";

/** Returns the cv current filter */
export const selectCvFilter = (state: IRootState) => {
  return state.cv.filter;
};

/** Returns the cv data */
export const selectCvData = (state: IRootState) => {
  return state.cv.data;
};

/** Returns the cv data loading state */
export const selectIsLoadingCvData = (state: IRootState) => {
  return state.cv.isLoading;
};

/** Returns the cv data error count */
export const selectCvDataErrorCount = (state: IRootState) => {
  return state.cv.errorCount;
};
