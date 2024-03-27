import { createSlice } from "@reduxjs/toolkit";
import {
  createWordThunk,
  deleteWordThunk,
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
        state.words = payload;
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
        state.words = [payload, ...state.words];
        state.own = [payload, ...state.own];
      })
      .addCase(createWordThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(createWordThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteWordThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.words = state.words.filter(({ _id }) => _id !== payload.id);
        state.own = state.own.filter(({ _id }) => _id !== payload.id);
        state.error = null;
      })
      .addCase(deleteWordThunk.pending, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteWordThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const wordReducer = slice.reducer;
