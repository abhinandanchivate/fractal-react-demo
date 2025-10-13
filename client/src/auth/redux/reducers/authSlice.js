import { createSlice } from "@reduxjs/toolkit";

const authState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};
// isAuthenticated: to check if the user is logged in or not
// user: to store user information
// loading: to indicate if an authentication-related operation is in progress
// error: to store any error messages related to authentication

const authSlice = createSlice({ name: "auth", initialState: authState });

export default authSlice.reducer;
