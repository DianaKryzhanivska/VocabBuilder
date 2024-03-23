import { createSlice } from "@reduxjs/toolkit";
import { getAllWordsThunk, getCategoriesThunk } from "./operations";

const initialState = {
  categories: [],
  words: [],
  own: [],
  statistics: [],
  tasks: [],
  answers: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: "word",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.categories = payload;
      })
      .addCase(getCategoriesThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getCategoriesThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getAllWordsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.words = payload;
      })
      .addCase(getAllWordsThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getAllWordsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const wordReducer = slice.reducer;
