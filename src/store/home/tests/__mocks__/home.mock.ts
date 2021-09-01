import { mockedGenericLocalizedApiResponse } from "~common";
import { IHomeData } from "../../interfaces";

export const mockedFetchHomeDataResponse: IHomeData = {
  ...mockedGenericLocalizedApiResponse,
  job_libraries: "the job libraries",
  job_title: "the job title",
  name: "the job name",
};
