import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/redux/reducers/authSlice";
const store = configureStore({
  reducer: { auth: authReducer }, // Add your reducers here
});

export default store;
