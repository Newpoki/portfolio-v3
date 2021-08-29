import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "common";
import { IFetchHomeDataPayload, IHomeData, IHomeState } from "./interfaces";

export const fetchHomeData = createAsyncThunk<IHomeData | undefined, IFetchHomeDataPayload>(
  "home/fetchData",
  async ({ localeCode }) => {
    const response = await api<IHomeData>({
      method: "get",
      url: "/home",
      params: {
        _locale: localeCode,
      },
    });

    // TODO: Ajouter meilleur gestion erreur
    return response.data;
  }
);

const initialState: IHomeState = {
  data: undefined,
  isLoading: true,
  errorCount: 0,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchHomeData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errorCount = 0;
    });

    builder.addCase(fetchHomeData.rejected, (state) => {
      state.isLoading = false;
      state.errorCount += 1;
    });
  },
});

export default homeSlice.reducer;
