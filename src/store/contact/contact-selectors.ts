import { IRootState } from "../interfaces";

/** Returns the contact data */
export const selectContactData = (state: IRootState) => {
  return state.contact.data;
};

/** Returns the contact data loading state */
export const selectIsLoadingContactData = (state: IRootState) => {
  return state.contact.isLoading;
};

/** Returns the contact data error count */
export const selectContactDataErrorCount = (state: IRootState) => {
  return state.contact.errorCount;
};
