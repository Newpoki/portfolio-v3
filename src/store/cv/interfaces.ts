import { ISortOrder, ILocaleCode, IGenericLocalizedApiResponse } from "~common";

/** The CvData place */
interface ICvPlace {
  city: string;
  country: string;
}

/** The cv element experience type */
export type ICvExperienceType = "work" | "diploma" | "birth";

/** The data repreasenting an element from the cv */
export interface ICvData extends IGenericLocalizedApiResponse {
  title: string;
  content: string;
  place: ICvPlace;
  startedAt: string;
  endedAt?: string;
  type: ICvExperienceType;
}

/** The available cv filters */
export type ICvExperienceTypeFilter = Omit<ICvExperienceType, "birth"> | undefined;

/** The payload from the thunks that fetch the cv data */
export interface IFetchCvDataPayload {
  localeCode: ILocaleCode;
  order: ISortOrder;
  cvTypeFilter: ICvExperienceTypeFilter;
}

/** The output data from `fetchCvData` thunk */
export interface IFetchCvDataOutput {
  data: Array<ICvData> | undefined;
  cvTypeFilter: ICvExperienceTypeFilter;
}

/** The payload from the action that change the current cv experience filter */
export interface IChangeCvFilterPayload {
  filter: ICvExperienceTypeFilter;
}

/** The cv slice state */
export interface ICvState {
  data: Array<ICvData> | undefined;
  isLoading: boolean;
  filter: ICvExperienceTypeFilter;
  errorCount: number;
}
