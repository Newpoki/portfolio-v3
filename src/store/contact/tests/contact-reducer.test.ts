import { mockedState } from "../../../store/tests/__mocks__/store";
import contact, { fetchContactData } from "../contact-slice";
import { IContactState, IFetchContactDataPayload } from "../interfaces";
import { mockedFetchContactDataResponse } from "./__mocks__/contact";

describe("contact reducer", () => {
  const payload: IFetchContactDataPayload = {
    localeCode: "fr-FR",
  };

  describe(fetchContactData.pending.toString(), () => {
    const action = fetchContactData.pending("contact/fetchData", payload);

    const state: IContactState = {
      ...mockedState.contact,
      isLoading: false,
    };

    it("should set loading state to true", () => {
      const actual = contact(state, action);
      const expected: IContactState = {
        ...state,
        isLoading: true,
      };

      expect(actual).toEqual(expected);
    });
  });

  describe(fetchContactData.fulfilled.toString(), () => {
    const action = fetchContactData.fulfilled(mockedFetchContactDataResponse, "contact/fetchData", payload);

    const state = mockedState.contact;

    it("should set loading state to false and update the data", () => {
      const actual = contact(state, action);
      const expected: IContactState = {
        ...state,
        isLoading: false,
        data: mockedFetchContactDataResponse,
      };

      expect(actual).toEqual(expected);
    });
  });

  describe(fetchContactData.rejected.toString(), () => {
    const action = fetchContactData.rejected(new Error(), "contact/fetchData", payload);

    const state = mockedState.contact;

    it("should set loading state to true", () => {
      const actual = contact(state, action);
      const expected: IContactState = {
        ...state,
        isLoading: false,
        errorCount: state.errorCount + 1,
      };

      expect(actual).toEqual(expected);
    });
  });
});
