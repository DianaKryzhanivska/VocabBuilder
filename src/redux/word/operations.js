import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../redux/instance";

export const getCategoriesThunk = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/words/categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllWordsThunk = createAsyncThunk(
  "words/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/words/all`);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSearchWordsThunk = createAsyncThunk(
  "words/search",
  async (body, { rejectWithValue }) => {
    const { keyword = "", category = "", page = "", limit = "" } = body;
    try {
      const response = await instance.get(
        `/words/all?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
