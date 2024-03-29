import { createSlice } from "@reduxjs/toolkit";
import {
  addWordThunk,
  createWordThunk,
  deleteWordThunk,
  editWordThunk,
  getAllWordsThunk,
  getCategoriesThunk,
  getOwnWordsThunk,
  getSearchWordsThunk,
  getStatisticsThunk,
  getTasksThunk,
  postAnswersThunk,
} from "./operations";

const initialState = {
  categories: [],
  words: [],
  page: null,
  totalPages: null,
  perPage: null,
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
        state.words = payload.results;
        state.totalPages = payload.totalPages;
        state.page = payload.page;
        state.perPage = payload.perPage;
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
        // state.words = state.words.filter(({ _id }) => _id !== payload.id);
        state.own = state.own.filter(({ _id }) => _id !== payload.id);
        state.error = null;
      })
      .addCase(deleteWordThunk.pending, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteWordThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(editWordThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.words = state.words.map((word) =>
          word._id === payload._id ? payload : word
        );
        state.own = state.own.map((word) =>
          word._id === payload._id ? payload : word
        );
        state.error = null;
      })
      .addCase(editWordThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(editWordThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getOwnWordsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.own = payload.results;
        state.error = null;
        state.totalPages = payload.totalPages;
        state.page = payload.page;
        state.perPage = payload.perPage;
      })
      .addCase(getOwnWordsThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getOwnWordsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getStatisticsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.statistics = payload.totalCount;
        state.error = null;
      })
      .addCase(getStatisticsThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getStatisticsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getTasksThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tasks = payload.tasks;
        state.error = null;
      })
      .addCase(getTasksThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getTasksThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(postAnswersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.answers = payload;
        state.error = null;
      })
      .addCase(postAnswersThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(postAnswersThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addWordThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addWordThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addWordThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const wordReducer = slice.reducer;
