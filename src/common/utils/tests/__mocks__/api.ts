import { IGenericLocalizedApiResponse, IGenericApiResponse } from "~common";

export const mockedGenericApiResponse: IGenericApiResponse = {
  _id: "61025d1e6ba7673529eeee18",
  createdAt: "2021-07-29T07:47:42.766Z",
  updatedAt: "2021-08-02T07:57:00.375Z",
  __v: 0,
  id: "61025d1e6ba7673529eeee18",
};

export const mockedGenericLocalizedApiResponse: IGenericLocalizedApiResponse = {
  ...mockedGenericApiResponse,
  localizations: [
    {
      _id: "6107a54c6f51dc2be752a2a4",
      id: "6107a54c6f51dc2be752a2a4",
      locale: "en-GB",
    },
  ],
  locale: "fr-FR",
};
