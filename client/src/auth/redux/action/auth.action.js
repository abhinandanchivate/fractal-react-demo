import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../../services/auth.service";

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
