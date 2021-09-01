import { mockedState } from "../../tests/__mocks__/store";
import home, { fetchHomeData } from "../home-slice";
import { IFetchHomeDataPayload, IHomeState } from "../interfaces";
import { mockedFetchHomeDataResponse } from "./__mocks__/home";

describe("home reducer", () => {
  describe(fetchHomeData.toString(), () => {
    const payload: IFetchHomeDataPayload = {
      localeCode: "fr-FR",
    };

    describe(fetchHomeData.pending.toString(), () => {
      const action = fetchHomeData.pending("home/fetchData", payload);

      const state: IHomeState = {
        ...mockedState.home,
        isLoading: false,
      };

      it("should set loading state to true", () => {
        const actual = home(state, action);
        const expected: IHomeState = {
          ...state,
          isLoading: true,
        };

        expect(actual).toEqual(expected);
      });
    });

    describe(fetchHomeData.fulfilled.toString(), () => {
      const action = fetchHomeData.fulfilled(mockedFetchHomeDataResponse, "home/fetchData", payload);

      const state = mockedState.home;

      it("should set loading state to false and update the data", () => {
        const actual = home(state, action);
        const expected: IHomeState = {
          ...state,
          isLoading: false,
          data: mockedFetchHomeDataResponse,
        };

        expect(actual).toEqual(expected);
      });
    });

    describe(fetchHomeData.rejected.toString(), () => {
      const action = fetchHomeData.rejected(new Error(), "home/fetchData", payload);

      const state = mockedState.home;

      it("should set loading state to true", () => {
        const actual = home(state, action);
        const expected: IHomeState = {
          ...state,
          isLoading: false,
          errorCount: state.errorCount + 1,
        };

        expect(actual).toEqual(expected);
      });
    });
  });
});
