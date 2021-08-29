import { mockedFetchAvailableLocalesResponse } from "store/settings/tests/mocks/settings";
import { ISettingsState } from "../../settings/interfaces";

export const mockedSettingsState: ISettingsState = {
  isDrawerOpen: true,
  localeCode: "fr-FR",
  themeVariant: "light",
  availableLocales: {
    isLoading: false,
    data: mockedFetchAvailableLocalesResponse,
    errorCount: 0,
  },
};
