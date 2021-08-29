import { IHomeState } from "../../home/interfaces";
import { mockedFetchHomeDataResponse } from "../../home/tests/mocks/home";

export const mockedHomeState: IHomeState = {
  data: mockedFetchHomeDataResponse,
  isLoading: false,
  errorCount: 0,
};
