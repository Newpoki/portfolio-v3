//API

export { api } from "./api";
export type {
  ISortOrder,
  IGenericApiResponse,
  ILocaleCode,
  IGenericLocalizedApiResponse,
  IStrapiLocalization,
} from "./api";
export { mockedGenericLocalizedApiResponse, mockedGenericApiResponse } from "./tests/__mocks__/api";

export { convertColorToRgba } from "./convert-color-to-rgba";
