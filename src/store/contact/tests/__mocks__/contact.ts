import { mockedGenericLocalizedApiResponse } from "~common";
import { IContactData } from "../../../../store/contact/interfaces";

export const mockedFetchContactDataResponse: IContactData = {
  ...mockedGenericLocalizedApiResponse,
  contactNumber: "0659416819",
  email: "savellijason@gmail.com",
};
