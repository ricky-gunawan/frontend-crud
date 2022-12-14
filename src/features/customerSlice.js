import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAddModal, setDeleteModal, setUpdateModal } from "./modalSlice";
import { login } from "./userSlice";

export const fetchCustomers = createAsyncThunk("customer/fetchCustomers", async (token, thunkAPI) => {
  try {
    const resp = await axios.get("https://mitramas-test.herokuapp.com/customers", {
      headers: {
        authorization: token,
      },
    });
    return resp.data.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(login());
    }
  }
});

export const addCustomer = createAsyncThunk("customer/addCustomer", async (payload, thunkAPI) => {
  try {
    const resp = await axios.post("https://mitramas-test.herokuapp.com/customers", payload.newCustomer, {
      headers: {
        authorization: payload.token,
      },
    });
    thunkAPI.dispatch(fetchCustomers(payload.token));
    thunkAPI.dispatch(setAddModal(false));
    console.log(resp.data.message);
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(login());
    }
    if (error.response.status === 400) {
      console.log("input tidak valid");
    }
  }
});

export const updateCustomer = createAsyncThunk("customer/updateCustomer", async (payload, thunkAPI) => {
  try {
    const resp = await axios.put("https://mitramas-test.herokuapp.com/customers", payload.newCustomer, {
      headers: {
        authorization: payload.token,
      },
    });
    thunkAPI.dispatch(fetchCustomers(payload.token));
    thunkAPI.dispatch(setUpdateModal({ isOpen: false }));
    console.log(resp.data.message);
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(login());
    }
    if (error.response.status === 400) {
      console.log("input tidak valid");
    }
  }
});

export const deleteCustomer = createAsyncThunk("customer/deleteCustomer", async (payload, thunkAPI) => {
  try {
    const resp = await axios.delete("https://mitramas-test.herokuapp.com/customers", {
      headers: {
        authorization: payload.token,
      },
      data: {
        id: payload.id,
      },
    });
    thunkAPI.dispatch(fetchCustomers(payload.token));
    thunkAPI.dispatch(setDeleteModal({ isOpen: false }));
    console.log(resp.data.message);
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(login());
    }
    if (error.response.status === 404) {
      console.log("customer tidak ditemukan");
    }
  }
});

const initialState = {
  isLoading: true,
  allCustomers: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setDisplayedCustomers: (state, action) => {
      const { search, filter, sort } = action.payload;
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

      const filterResult = filter ? searchResult.filter((customer) => customer.status === (filter === "active")) : searchResult;

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

      state.displayedCustomers = sortResult;
    },
  },
  extraReducers: {
    [fetchCustomers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCustomers.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.allCustomers = action.payload;
      }
    },
    [fetchCustomers.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setAllCustomers, setDisplayedCustomers } = customerSlice.actions;

export default customerSlice.reducer;
