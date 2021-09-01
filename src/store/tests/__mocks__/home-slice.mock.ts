import { IHomeState } from "../../home/interfaces";
import { mockedFetchHomeDataResponse } from "../../home/tests/__mocks__/home.mock";

export const mockedHomeState: IHomeState = {
  data: mockedFetchHomeDataResponse,
  isLoading: false,
  errorCount: 0,
};
