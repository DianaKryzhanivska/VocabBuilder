import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { clearToken, setToken } from "../instance";
import { toast } from "react-toastify";

export const signUpThunk = createAsyncThunk(
  "users/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(credentials);
      const response = await instance.post("/users/signup", credentials);
      setToken(response.data.token);
      console.log(response);
      toast.success(`Welcome ${response.data.name}`);
      return response.data;
    } catch (error) {
      console.log(credentials);
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
      const { data } = await instance.post("/users/signin", credentials);
      setToken(data.token);
      toast.success(`Hello ${data.user.name}`);
      console.log("signIn", data);
      return data;
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

export const refreshThunk = createAsyncThunk(
  "users/refresh",
  async (bodyToken, { rejectWithValue, getState }) => {
    if (bodyToken) {
      setToken(bodyToken);
    } else {
      setToken(getState().auth.token);
    }
    try {
      const { data } = await instance.get("/users/current");
      console.log("refreshThunk", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
