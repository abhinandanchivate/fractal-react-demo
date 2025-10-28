import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/reducers/authSlice";
import profileReducer from "../profiles/redux/reducers/profileSlice";
const store = configureStore({
  reducer: { auth: authReducer, profile: profileReducer }, // Add your reducers here
});
// middleware : will help us to handle the navigation.

export default store;
