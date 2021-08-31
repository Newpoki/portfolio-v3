//API

export { api } from "./api";
export type {
  ISortOrder,
  IGenericApiResponse,
  ILocaleCode,
  IGenericLocalizedApiResponse,
  IStrapiLocalization,
} from "./api";
export { mockedGenericLocalizedApiResponse, mockedGenericApiResponse } from "./tests/mocks/api";

export { convertRgbToRgba } from "./convert-rgb-to-rgba";
