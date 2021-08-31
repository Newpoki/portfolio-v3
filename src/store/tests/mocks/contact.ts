import { IContactState } from "../../contact/interfaces";
import { mockedFetchContactDataResponse } from "../../contact/tests/mocks/contact";

export const mockedContactState: IContactState = {
  data: mockedFetchContactDataResponse,
  isLoading: false,
  errorCount: 0,
};
