import { ISortOrder } from "common";

interface ICvPlace {
  city: string;
  country: string;
}

export type ICvExperienceType = "work" | "diploma" | "birth";

export interface ICvData {
  title: string;
  content: string;
  place: ICvPlace;
  startedAt: string;
  endedAt: string | undefined;
  type: ICvExperienceType;
}

export type ISelectCvParams = {
  sort: keyof ICvData;
  order: ISortOrder;
};
