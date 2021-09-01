import { IHomeState } from "../../home/interfaces";
import { mockedFetchHomeDataResponse } from "../../home/tests/__mocks__/home";

export const mockedHomeState: IHomeState = {
  data: mockedFetchHomeDataResponse,
  isLoading: false,
  errorCount: 0,
};
