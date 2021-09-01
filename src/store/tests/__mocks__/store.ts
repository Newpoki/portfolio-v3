import { IRootState } from "../../interfaces";
import { mockedSettingsState } from "./settings";
import { mockedHomeState } from "./home";
import { mockedContactState } from "./contact";
import { mockedCvState } from "./cv";

export const mockedState: IRootState = {
  settings: mockedSettingsState,
  home: mockedHomeState,
  contact: mockedContactState,
  cv: mockedCvState,
};
