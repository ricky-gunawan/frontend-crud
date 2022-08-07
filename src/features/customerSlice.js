import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCustomers = createAsyncThunk("customer/fetchCustomers", async () => {
  const resp = await axios.get("https://mitramas-test.herokuapp.com/customers", {
    headers: {
      authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU5ODg0Mjc0LCJleHAiOjE2NTk4ODc4NzQsIm5iZiI6MTY1OTg4NDI3NCwianRpIjoiMWlzaVZVdUMyRTRKOFhZOSIsInN1YiI6MTUzLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.iqVPnzwy3Rl2v7Ml3BxDZVgKwZIWmXka55ktE4xauNM",
    },
  });
  return resp.data.data;
});

const initialState = {
  isLoading: true,
  allCustomers: [],
  displayedCustomers: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setDisplayedCustomers: (state, { search, filter, sort }) => {
      const searchResult = search
        ? state.allCustomers.filter(
            (customer) =>
              customer.name.toLowerCase().includes(search.toLowerCase()) ||
              customer.address.toLowerCase().includes(search.toLowerCase()) ||
              customer.country.toLowerCase().includes(search.toLowerCase()) ||
              customer.phone_number.toLowerCase().includes(search.toLowerCase()) ||
              customer.job_title.toLowerCase().includes(search.toLowerCase())
          )
        : state.allCustomers;

      const filterResult = filter ? searchResult.filter((customer) => customer.status === filter) : searchResult;

      const sortResult = [...filterResult];

      sort &&
        sortResult.sort((a, b) => {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();

          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });

      sort === "dsc" && sortResult.reverse();
    },
  },
  extraReducers: {
    [fetchCustomers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCustomers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allCustomers = action.payload;
    },
    [fetchCustomers.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setAllCustomers, setDisplayedCustomers } = customerSlice.actions;

export default customerSlice.reducer;
