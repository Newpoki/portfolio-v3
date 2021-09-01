import { IRootState } from "../../interfaces";
import { mockedSettingsState } from "./settings-slice.mock";
import { mockedHomeState } from "./home-slice.mock";
import { mockedContactState } from "./contact-slice.mock";
import { mockedCvState } from "./cv-slice.mock";

export const mockedState: IRootState = {
  settings: mockedSettingsState,
  home: mockedHomeState,
  contact: mockedContactState,
  cv: mockedCvState,
};
