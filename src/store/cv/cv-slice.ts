import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "common";
import { ICvData, ICvState, IFetchCvDataOutput, IFetchCvDataPayload } from "./interfaces";

const initialState: ICvState = {
  data: undefined,
  isLoading: true,
  filter: undefined,
  errorCount: 0,
};

// TODO: Add comment for every thunks
export const fetchCvData = createAsyncThunk<IFetchCvDataOutput, IFetchCvDataPayload>(
  "cv/fetchData",
  async ({ localeCode, cvTypeFilter, order }) => {
    const response = await api<Array<ICvData>>({
      method: "get",
      url: "/cvs",
      params: {
        _locale: localeCode,
        _sort: `startedAt:${order}`,
        type_eq: cvTypeFilter,
      },
    });

    // TODO: Ajouter meilleur gestion erreur
    return {
      data: response.data,
      cvTypeFilter,
    };
  }
);

export const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCvData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCvData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.filter = payload.cvTypeFilter;
      state.data = payload.data;
      state.errorCount = 0;
    });

    builder.addCase(fetchCvData.rejected, (state) => {
      state.isLoading = false;
      state.errorCount += 1;
    });
  },
});

export default cvSlice.reducer;
