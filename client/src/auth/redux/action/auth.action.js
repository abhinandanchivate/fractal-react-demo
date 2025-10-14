import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../services/auth.service";

export const loginUserAction = createAsyncThunk(
  "auth/loginUserAction",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await loginUser(userData);
      return data; // payload internally.
    } catch (error) {}
  }
);

export const registerUserAction = createAsyncThunk(
  // this action with whome it will be associated
  "auth/registerUserAction",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerUser(userData);
      return data; // payload internally.
    } catch (error) {}
  }
);
