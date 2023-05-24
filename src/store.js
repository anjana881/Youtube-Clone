import { configureStore } from "@reduxjs/toolkit";
// import userReducerValues from "./sliceFeatures/user/userSlice/";
import toggleSlice from "./sliceFeatures/toggleSlice";

export const store = configureStore({
  reducer: {
    toggleSidebar: toggleSlice,
  },
});

// export default store;
