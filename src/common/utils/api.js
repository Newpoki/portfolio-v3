import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type ISortOrder = "ASC" | "DESC";

/**
 * Handle the API request to the backend
 * @param {AxiosRequestConfig} config The API call config options
 */
export const api = async function <TRequestData>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<TRequestData>> {
  return await axios({
    ...config,
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });
};
