import { createSlice } from "@reduxjs/toolkit";
import { registerUserAction } from "../action/auth.action";

const authState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  token: null,
};
// isAuthenticated: to check if the user is logged in or not
// user: to store user information
// loading: to indicate if an authentication-related operation is in progress
// error: to store any error messages related to authentication

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAction.pending, (state) => {
        // state: authState / initailstate
        state.loading = true;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data.token;

        // action : return ==> registerUserAction`
        // add the token ==> who will bring the token?
        //
      })
      .addCase(registerUserAction.rejected);
  }, // all rest calls.
  reducers: {}, //common business logic related to auth no rest calls
});

export default authSlice.reducer;
