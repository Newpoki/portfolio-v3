import { PayloadAction } from "@reduxjs/toolkit";
import { mockedState } from "store/tests/mocks/store";

import {
  IChangeIsDrawerOpenPayload,
  IChangeLocaleCodePayload,
  IChangeThemeVariantPayload,
  ISettingsState,
} from "../interfaces";
import settings, {
  changeIsDrawerOpen,
  changeLocaleCode,
  changeThemeVariant,
  fetchAvailableLocales,
} from "../settings-slice";
import { mockedFetchAvailableLocalesResponse } from "./mocks/settings";

describe("settings reducer", () => {
  describe(changeLocaleCode.toString(), () => {
    const payload: IChangeLocaleCodePayload = {
      localeCode: "en-GB",
    };

    const action: PayloadAction<IChangeLocaleCodePayload> = changeLocaleCode(payload);

    const state: ISettingsState = mockedState.settings;

    it("should change the locale code", () => {
      const actual = settings(state, action);
      const expected: ISettingsState = {
        ...state,
        localeCode: action.payload.localeCode,
      };

      expect(actual).toEqual(expected);
    });
  });

  describe(changeThemeVariant.toString(), () => {
    const payload: IChangeThemeVariantPayload = {
      themeVariant: "system",
    };

    const action: PayloadAction<IChangeThemeVariantPayload> = changeThemeVariant(payload);

    const state: ISettingsState = mockedState.settings;

    it("should change the theme variant", () => {
      const actual = settings(state, action);
      const expected: ISettingsState = {
        ...state,
        themeVariant: action.payload.themeVariant,
      };

      expect(actual).toEqual(expected);
    });
  });

  describe(changeIsDrawerOpen.toString(), () => {
    const payload: IChangeIsDrawerOpenPayload = {
      isDrawerOpen: false,
    };

    const action: PayloadAction<IChangeIsDrawerOpenPayload> = changeIsDrawerOpen(payload);

    const state: ISettingsState = mockedState.settings;

    it("should change the drawer open state", () => {
      const actual = settings(state, action);
      const expected: ISettingsState = {
        ...state,
        isDrawerOpen: action.payload.isDrawerOpen,
      };

      expect(actual).toEqual(expected);
    });
  });

  describe(fetchAvailableLocales.pending.toString(), () => {
    const action = fetchAvailableLocales.pending("settings/fetchAvailableData");

    const state: ISettingsState = {
      ...mockedState.settings,
      availableLocales: {
        ...mockedState.settings.availableLocales,
        isLoading: false,
      },
    };

    it("should set availableLocales loading state to true", () => {
      const actual = settings(state, action);
      const expected: ISettingsState = {
        ...state,
        availableLocales: {
          ...state.availableLocales,
          isLoading: true,
        },
      };

      expect(actual).toEqual(expected);
    });
  });

  describe(fetchAvailableLocales.fulfilled.toString(), () => {
    const action = fetchAvailableLocales.fulfilled(
      mockedFetchAvailableLocalesResponse,
      "settings/fetchAvailableData"
    );

    const state = mockedState.settings;

    it("should set availableLocales loading state to false and update the data", () => {
      const actual = settings(state, action);
      const expected: ISettingsState = {
        ...state,
        availableLocales: {
          isLoading: false,
          data: action.payload,
          errorCount: 0,
        },
      };

      expect(actual).toEqual(expected);
    });
  });

  describe(fetchAvailableLocales.rejected.toString(), () => {
    const action = fetchAvailableLocales.rejected(new Error(), "settings/fetchAvailableData");

    const state = mockedState.settings;

    it("should set availableLocales loading state to true", () => {
      const actual = settings(state, action);
      const expected: ISettingsState = {
        ...state,
        availableLocales: {
          ...state.availableLocales,
          isLoading: false,
          errorCount: state.availableLocales.errorCount + 1,
        },
      };

      expect(actual).toEqual(expected);
    });
  });
});
