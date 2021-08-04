interface ICvPlace {
  city: string;
  country: string;
}

type ICvExperienceType = "work" | "diploma" | "birth";

export interface ICvData {
  title: string;
  content: string;
  place: ICvPlace;
  startedAt: string;
  endedAt: string | undefined;
  type: ICvExperienceType;
}
