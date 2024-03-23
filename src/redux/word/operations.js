import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../redux/instance";

export const getCategoriesThunk = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("words/categories");
      console.log("response", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
