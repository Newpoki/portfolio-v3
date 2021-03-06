import { mockedFetchCvDataResponse } from "./../../cv/tests/__mocks__/cv.mock";
import { ICvState } from "../../cv/interfaces";

export const mockedCvState: ICvState = {
  data: mockedFetchCvDataResponse,
  errorCount: 0,
  filter: "work",
  isLoading: false,
};
