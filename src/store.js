import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customerSlice";
import userReducer from "./features/userSlice";
import modalReducer from "./features/modalSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    user: userReducer,
    modal: modalReducer,
  },
});

export default store;
