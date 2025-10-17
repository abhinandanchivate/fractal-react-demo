import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadUser, loginUser, registerUser } from "../../services/auth.service";

export const loadUserAction = createAsyncThunk(
  "auth/loadUserAction",
  async (_, { rejectWithValue }) => {
    try {
      const data = await loadUser();
      return { data }; // payload internally.
    } catch (error) {}
  }
);
export const loginUserAction = createAsyncThunk(
  "auth/loginUserAction",
  async (userData, { rejectWithValue, dispatch }) => {
    //1st initail args are the arguments which u will pass while calling the action
    //2nd arg is an object which has multiple properties
    // this is coming from redux toolkit
    // rejectWithValue: to handle the errors
    // dispatch: to dispatch other actions
    try {
      const data = await loginUser(userData);

      dispatch(loadUserAction()).unwrap(); // to load the user details after login
      return data; // payload internally.
    } catch (error) {}
  }
);

export const registerUserAction = createAsyncThunk(
  // this action with whome it will be associated
  "auth/registerUserAction",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await registerUser(userData);
      dispatch(loadUserAction());
      return data; // payload internally.
    } catch (error) {}
  }
);
