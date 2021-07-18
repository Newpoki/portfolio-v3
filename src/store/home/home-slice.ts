import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "common";

interface IHomeData {
  name: string;
  job_title: string;
  job_libraries: string;
}

interface IHomeState {
  isLoading: boolean;
  data: IHomeData | undefined;
}

const initialState: IHomeState = {
  isLoading: false,
  data: undefined,
};

/**
 * Get the data to display on the home page
 */
export const getHomeData = createAsyncThunk("home/get", async () => {
  const response = await api<IHomeData>({
    method: "get",
    url: "/home",
  });

  return { data: response.data };
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomeData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getHomeData.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
    });

    builder.addCase(getHomeData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
