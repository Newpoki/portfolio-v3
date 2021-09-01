import { IContactState } from "../../contact/interfaces";
import { mockedFetchContactDataResponse } from "../../contact/tests/__mocks__/contact";

export const mockedContactState: IContactState = {
  data: mockedFetchContactDataResponse,
  isLoading: false,
  errorCount: 0,
};
