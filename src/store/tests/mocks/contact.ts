import { IContactState } from "store/contact/interfaces";
import { mockedFetchContactDataResponse } from "store/contact/tests/mocks/contact";

export const mockedContactState: IContactState = {
  data: mockedFetchContactDataResponse,
  isLoading: false,
  errorCount: 0,
};
