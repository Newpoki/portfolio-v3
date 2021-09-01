import * as ls from "local-storage";

import { DEFAULT_LOCALE_CODE } from "../settings-constants";
import { getDefaultLocaleCode } from "../settings-utils";

describe("settings utils", () => {
  describe("getDefaultLocaleCode", () => {
    describe("there is a localeCode in the localStorage", () => {
      it("should return the localeCode from the localStorage", () => {
        jest.spyOn(ls, "get").mockImplementationOnce(() => "fr-FR");

        const actual = getDefaultLocaleCode();
        const expected = "fr-FR";

        expect(actual).toBe(expected);
      });
    });

    describe("there is no localeCode in the localStorage", () => {
      describe("navigator language perfectly match a localeCode", () => {
        it("should return the matching localeCode", () => {
          const navigatorLanguage = "fr-FR";

          jest.spyOn(ls, "get").mockImplementationOnce(() => null);
          jest.spyOn(navigator, "language", "get").mockImplementationOnce(() => navigatorLanguage);

          const actual = getDefaultLocaleCode();
          const expected = navigatorLanguage;
          expect(actual).toBe(expected);
        });
      });

      describe("navigator language is included in a localeCode", () => {
        it("should return the matching localeCode", () => {
          const navigatorLanguage = "en";

          jest.spyOn(ls, "get").mockImplementationOnce(() => null);
          jest.spyOn(navigator, "language", "get").mockImplementationOnce(() => navigatorLanguage);

          const actual = getDefaultLocaleCode();
          const expected = "en-GB";
          expect(actual).toBe(expected);
        });
      });

      describe("navigator language doesnt match any localeCode", () => {
        it(`should return ${DEFAULT_LOCALE_CODE}`, () => {
          const navigatorLanguage = "it";

          jest.spyOn(ls, "get").mockImplementationOnce(() => null);
          jest.spyOn(navigator, "language", "get").mockImplementationOnce(() => navigatorLanguage);

          const actual = getDefaultLocaleCode();
          const expected = DEFAULT_LOCALE_CODE;
          expect(actual).toBe(expected);
        });
      });
    });
  });
});
