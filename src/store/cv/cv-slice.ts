import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "common";
import { ISortOrder } from "common";
import { ILocaleCode } from "../settings/settings-slice";

interface ICvPlace {
  city: string;
  country: string;
}

type ICvExperienceType = "work" | "diploma" | "birth";

export interface ICvData {
  title: string;
  content: string;
  place: ICvPlace;
  startedAt: string;
  endedAt: string | undefined;
  type: ICvExperienceType;
}

interface ICvState {
  data: Array<ICvData> | undefined;
  isLoading: boolean;
}

interface IGetCvDataInput {
  locale: ILocaleCode;
  sort: keyof ICvData;
  order: ISortOrder;
}

const initialState: ICvState = {
  data: undefined,
  isLoading: true,
};

/**
 * Get the data to display on the home page
 */
export const getCvData = createAsyncThunk(
  "cv/get",
  async ({ locale, sort, order }: IGetCvDataInput) => {
    const response = await api<Array<ICvData>>({
      method: "get",
      url: "/cvs",
      params: {
        _locale: locale,
        _sort: `${sort}:${order}`,
      },
    });

    return { data: response.data };
  }
);

export const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCvData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCvData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
    });

    builder.addCase(getCvData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
