import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slider: false,
  addModal: false,
  updateModal: false,
  updateData: {
    name: "",
    address: "",
    country: "",
    phone_number: "",
    job_title: "",
    status: true,
  },
  deleteModal: false,
  deleteData: {},
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setSlider: (state, action) => {
      state.slider = action.payload;
    },
    setAddModal: (state, action) => {
      state.addModal = action.payload;
    },
    setUpdateModal: (state, action) => {
      if (action.payload.data) {
        state.updateData = action.payload.data;
      }
      state.updateModal = action.payload.isOpen;
    },
    setDeleteModal: (state, action) => {
      if (action.payload.data) {
        state.deleteData = action.payload.data;
      }
      state.deleteModal = action.payload.isOpen;
    },
  },
});

export const { setSlider, setAddModal, setUpdateModal, setDeleteModal } = modalSlice.actions;

export default modalSlice.reducer;
