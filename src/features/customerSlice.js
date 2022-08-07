import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCustomers,
  displayedCustomers,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setAllCustomers: (state, action) => {
      state.allCustomers = action.payload;
    },
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
});

export const { setAllCustomers, setDisplayedCustomers } = customerSlice.actions;

export default customerSlice.reducer;
