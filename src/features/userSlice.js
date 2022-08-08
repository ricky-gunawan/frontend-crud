import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = () => async (dispatch) => {
  try {
    const resp = await axios.post("https://mitramas-test.herokuapp.com/auth/login", {
      email: "akun6@mig.id",
      password: "FDE13EA7",
    });
    const token = resp.data.access_token;
    dispatch(setToken(token));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  token: "",
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
