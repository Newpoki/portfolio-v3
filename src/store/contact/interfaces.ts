import { ILocaleCode } from "common";

/** The contact data */
export interface IContactData {
  email: string;
  contactNumber: string;
}

/** The payload interface from the thunk that fetch the contact data */
export interface IFetchContactDataPayload {
  localeCode: ILocaleCode;
}

/** The contact slice state */
export interface IContactState {
  data: IContactData | undefined;
  isLoading: boolean;
  errorCount: number;
}
