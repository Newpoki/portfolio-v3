import { IRootState } from "../store";

/**
 * Return the home page data
 */
export const selectHomeData = (state: IRootState) => {
  return state.home.data;
};

/**
 * Return the home page data loading state
 */
export const selectIsLoadingHomeData = (state: IRootState) => {
  return state.home.isLoading;
};
