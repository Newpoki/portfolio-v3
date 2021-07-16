import { IRootState } from "../store";

export const selectHomeData = (state: IRootState) => {
  return state.home.data;
};

export const selectIsLoadingHomeData = (state: IRootState) => {
  return state.home.isLoading;
};
