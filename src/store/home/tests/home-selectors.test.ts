import { mockedState } from "../../tests/__mocks__/store";
import { selectHomeData, selectHomeDataErrorCount, selectIsLoadingHomeData } from "../home-selectors";

describe("home selectors", () => {
  const state = mockedState;

  describe("selectHomeData", () => {
    it("should return the home data", () => {
      const actual = selectHomeData(state);
      const expected = state.home.data;

      expect(actual).toEqual(expected);
    });
  });

  describe("selectIsLoadingHomeData", () => {
    it("should return the home data loading state", () => {
      const actual = selectIsLoadingHomeData(state);
      const expected = state.home.isLoading;

      expect(actual).toBe(expected);
    });
  });

  describe("selectHomeDataErrorCount", () => {
    it("should return the home data error count", () => {
      const actual = selectHomeDataErrorCount(state);
      const expected = state.home.errorCount;

      expect(actual).toBe(expected);
    });
  });
});
