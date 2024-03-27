import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../redux/instance";
import { toast } from "react-toastify";

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

export const createWordThunk = createAsyncThunk(
  "words/create",
  async (formData, { rejectWithValue }) => {
    const { en } = formData;
    try {
      const response = await instance.post(`/words/create`, formData);
      toast.success(`Word ${en} successfully added.`);
      console.log(response);
      return response.data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          toast.error(`Bad request (invalid request body)`);
          break;
        case 409:
          toast.error(`Such a word exists`);
          break;
        default:
          toast.error(`Something went wrong. Please try again`);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWordThunk = createAsyncThunk(
  "words/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/words/delete/${id}`);
      console.log(response);
      toast.success(`This word was deleted`);
      return response.data;
    } catch (error) {
      switch (error.response.status) {
        case 404:
          toast.error(`You are not allowed to delete this word`);
          break;
        default:
          toast.error(`Something went wrong. Please try again`);
      }
      return rejectWithValue(error.message);
    }
  }
);
