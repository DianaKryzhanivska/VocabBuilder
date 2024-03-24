import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { clearToken, setToken } from "../instance";
import { toast } from "react-toastify";

export const signUpThunk = createAsyncThunk(
  "users/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post("/users/signup", credentials);
      setToken(response.data.token);
      toast.success(`Welcome ${response.data.name}`);
      localStorage.setItem("refreshToken", response.data.token);
      localStorage.setItem("accessToken", response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            toast.error(`Validation error: please check your data`);
            break;
          case 409:
            toast.error(`Error: User with this email already exists`);
            break;
          default:
            break;
        }
      }
      return rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "users/signin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post("/users/signin", credentials);
      setToken(response.data.token);
      toast.success(`Hello ${response.data.name}`);

      console.log(response);
      localStorage.setItem("refreshToken", response.data.token);
      localStorage.setItem("accessToken", response.data.token);
      return response.data;
    } catch (error) {
      toast.error(`Email or password is not valid`);
      return rejectWithValue(error.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  "users/signout",
  async (_, { rejectWithValue, getState }) => {
    try {
      await instance.post("/users/signout");
      clearToken();
      toast.success(`Bye ${getState().auth.user.name}`);
      localStorage.clear("refreshToken");
      localStorage.clear("accessToken");
    } catch (error) {
      switch (error.response.status) {
        case 401:
          toast.error(`You are not authorized to log out.`);
          break;
        default:
          toast.error(`Something went wrong. Please try again later`);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "users/current",
  async (_, { rejectWithValue }) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return rejectWithValue("Unable to fetch user");
    }
    try {
      setToken(accessToken);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
