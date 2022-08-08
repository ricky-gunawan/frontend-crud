import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customerSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    user: userReducer,
  },
});

export default store;
