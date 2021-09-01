import { mockedState } from "../../tests/__mocks__/store";
import {
  selectAvailableLocales,
  selectAvailableLocalesErrorCount,
  selectIsDrawerOpen,
  selectIsLoadingAvailableLocales,
  selectLocaleCode,
  selectThemeVariant,
} from "../settings-selectors";

describe("settings selectors", () => {
  describe("selectLocaleCode", () => {
    const state = mockedState;

    it("should return the locale code", () => {
      const actual = selectLocaleCode(state);
      const expected = state.settings.localeCode;

      expect(actual).toBe(expected);
    });
  });

  describe("selectThemeVariant", () => {
    const state = mockedState;

    it("should return the theme variant", () => {
      const actual = selectThemeVariant(state);
      const expected = state.settings.themeVariant;

      expect(actual).toBe(expected);
    });
  });

  describe("selectIsDrawerOpen", () => {
    const state = mockedState;

    it("should return the drawer open state", () => {
      const actual = selectIsDrawerOpen(state);
      const expected = state.settings.isDrawerOpen;

      expect(actual).toBe(expected);
    });
  });

  describe("selectAvailableLocales", () => {
    const state = mockedState;

    it("should return the available locales data", () => {
      const actual = selectAvailableLocales(state);
      const expected = state.settings.availableLocales.data;

      expect(actual).toEqual(expected);
    });
  });

  describe("selectIsLoadingAvailableLocales", () => {
    const state = mockedState;

    it("should return the available locales data", () => {
      const actual = selectIsLoadingAvailableLocales(state);
      const expected = state.settings.availableLocales.isLoading;

      expect(actual).toBe(expected);
    });
  });

  describe("selectAvailableLocalesErrorCount", () => {
    const state = mockedState;

    it("should return the available locales error count", () => {
      const actual = selectAvailableLocalesErrorCount(state);
      const expected = state.settings.availableLocales.errorCount;

      expect(actual).toBe(expected);
    });
  });
});
