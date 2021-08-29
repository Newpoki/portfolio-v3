import { mockedFetchCvDataResponse } from "./../../cv/tests/mocks/cv";
import { ICvState } from "../../cv/interfaces";

export const mockedCvState: ICvState = {
  data: mockedFetchCvDataResponse,
  errorCount: 0,
  filter: "work",
  isLoading: false,
};
