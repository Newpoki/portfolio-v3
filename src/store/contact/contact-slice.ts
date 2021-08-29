import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "common";
import { IContactData, IContactState, IFetchContactDataPayload } from "./interfaces";

const initialState: IContactState = {
  data: undefined,
  isLoading: true,
  errorCount: 0,
};

// TODO: Ajouter tests sur les home thunks comme pour settings
export const fetchContactData = createAsyncThunk<
  IContactData | undefined,
  IFetchContactDataPayload
>("contact/fetchData", async ({ localeCode }) => {
  const response = await api<IContactData>({
    method: "get",
    url: "/contact",
    params: {
      _locale: localeCode,
    },
  });

  // TODO: Ajouter meilleur gestion erreur
  return response.data;
});

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContactData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchContactData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errorCount = 0;
    });

    builder.addCase(fetchContactData.rejected, (state) => {
      state.isLoading = false;
      state.errorCount += 1;
    });
  },
});

export default contactSlice.reducer;
