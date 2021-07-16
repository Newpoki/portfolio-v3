import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Handle the API request to the backend
 * @param {AxiosRequestConfig} config The API call config options
 */
export const api = async function <TRequestData>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<TRequestData>> {
  // TODO: Utiliser variable env pour definir baseUrl
  return await axios({
    ...config,
    baseURL: "http://localhost:1337",
  });
};
