import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  refreshThunk,
  signInThunk,
  signOutThunk,
  signUpThunk,
} from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  isRefresh: true,
  error: null,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefresh = false;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(signOutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = "";
        state.user = {
          email: "",
          name: "",
        };
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
        state.error = payload;
      })
      .addMatcher(
        isAnyOf(signUpThunk.pending, signInThunk.pending, signOutThunk.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          signInThunk.rejected,
          signOutThunk.rejected,
          refreshThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
