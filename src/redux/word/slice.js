import { createSlice } from "@reduxjs/toolkit";
import {
  createWordThunk,
  getAllWordsThunk,
  getCategoriesThunk,
  getSearchWordsThunk,
} from "./operations";

const initialState = {
  categories: [],
  words: [],
  filtered: [],
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
      })
      .addCase(getSearchWordsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.filtered = payload;
      })
      .addCase(getSearchWordsThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getSearchWordsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(createWordThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.words = [...state.words, payload];
        state.own = [...state.own, payload];
      })
      .addCase(createWordThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(createWordThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const wordReducer = slice.reducer;
