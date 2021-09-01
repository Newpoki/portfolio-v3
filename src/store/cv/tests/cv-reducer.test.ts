import { mockedState } from "../../tests/__mocks__/store";
import cv, { fetchCvData } from "../cv-slice";
import { IFetchCvDataPayload, ICvState } from "../interfaces";
import { mockedFetchCvDataOutput, mockedFetchCvDataResponse } from "./__mocks__/cv.mock";

describe("cv reducer", () => {
  describe(fetchCvData.toString(), () => {
    const payload: IFetchCvDataPayload = {
      localeCode: "fr-FR",
      order: "DESC",
      cvTypeFilter: "work",
    };

    describe(fetchCvData.pending.toString(), () => {
      const action = fetchCvData.pending("cv/fetchData", payload);

      const state: ICvState = {
        ...mockedState.cv,
        isLoading: false,
      };

      it("should set loading state to true", () => {
        const actual = cv(state, action);
        const expected: ICvState = {
          ...state,
          isLoading: true,
        };

        expect(actual).toEqual(expected);
      });
    });

    describe(fetchCvData.fulfilled.toString(), () => {
      const action = fetchCvData.fulfilled(mockedFetchCvDataOutput, "cv/fetchData", payload);

      const state = mockedState.cv;

      it("should set loading state to false and update the data", () => {
        const actual = cv(state, action);
        const expected: ICvState = {
          ...state,
          isLoading: false,
          filter: action.payload.cvTypeFilter,
          data: mockedFetchCvDataResponse,
          errorCount: 0,
        };

        expect(actual).toEqual(expected);
      });
    });

    describe(fetchCvData.rejected.toString(), () => {
      const action = fetchCvData.rejected(new Error(), "cv/fetchData", payload);

      const state = mockedState.cv;

      it("should set loading state to true", () => {
        const actual = cv(state, action);
        const expected: ICvState = {
          ...state,
          isLoading: false,
          errorCount: state.errorCount + 1,
        };

        expect(actual).toEqual(expected);
      });
    });
  });
});
