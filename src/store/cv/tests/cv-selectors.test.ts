import { mockedState } from "../../tests/__mocks__/store";
import { selectCvData, selectCvDataErrorCount, selectCvFilter, selectIsLoadingCvData } from "../cv-selectors";

describe("cv selectors", () => {
  describe("selectCvFilter", () => {
    const state = mockedState;

    it("should return the cv current filter", () => {
      const actual = selectCvFilter(state);
      const expected = state.cv.filter;

      expect(actual).toBe(expected);
    });
  });

  describe("selectCvData", () => {
    const state = mockedState;

    it("should return the cv data", () => {
      const actual = selectCvData(state);
      const expected = state.cv.data;

      expect(actual).toEqual(expected);
    });
  });

  describe("selectIsLoadingCvData", () => {
    const state = mockedState;

    it("should return the cv data loading state", () => {
      const actual = selectIsLoadingCvData(state);
      const expected = state.cv.isLoading;

      expect(actual).toBe(expected);
    });
  });

  describe("selectCvDataErrorCount", () => {
    const state = mockedState;

    it("should return the cv data error count", () => {
      const actual = selectCvDataErrorCount(state);
      const expected = state.cv.errorCount;

      expect(actual).toBe(expected);
    });
  });
});
