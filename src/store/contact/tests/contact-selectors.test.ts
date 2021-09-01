import { selectContactDataErrorCount } from "./../contact-selectors";
import { mockedState } from "../../../store/tests/__mocks__/store";
import { selectContactData, selectIsLoadingContactData } from "../contact-selectors";

describe("contact selectors", () => {
  describe("selectContactData", () => {
    const state = mockedState;

    it("should return contact data", () => {
      const actual = selectContactData(state);
      const expected = state.contact.data;

      expect(actual).toEqual(expected);
    });
  });

  describe("selectIsLoadingContactData", () => {
    const state = mockedState;

    it("should return contact data loading state", () => {
      const actual = selectIsLoadingContactData(state);
      const expected = state.contact.isLoading;

      expect(actual).toBe(expected);
    });
  });

  describe("selectContactDataErrorCount", () => {
    const state = mockedState;

    it("should return contact data loading state", () => {
      const actual = selectContactDataErrorCount(state);
      const expected = state.contact.errorCount;

      expect(actual).toBe(expected);
    });
  });
});
