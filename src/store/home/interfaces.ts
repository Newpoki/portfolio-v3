import { ILocaleCode } from "~common";

/** The displayed data on the home page */
export interface IHomeData {
  name: string;
  job_title: string;
  job_libraries: string;
}

/** The payload from the thunks that fetch the home data */
export interface IFetchHomeDataPayload {
  localeCode: ILocaleCode;
}

/** the home slice state */
export interface IHomeState {
  isLoading: boolean;
  data: IHomeData | undefined;
  errorCount: number;
}
