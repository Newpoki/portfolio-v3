import { IRootState } from "../store";

/**
 * Return the cv page data
 */
export const selectCvData = (state: IRootState) => {
  return state.cv.data;
};

/**
 * Return the cv page data loading state
 */
export const selectIsLoadingCvData = (state: IRootState) => {
  return state.cv.isLoading;
};
