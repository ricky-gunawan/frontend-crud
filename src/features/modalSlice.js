import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addModal: false,
  updateModal: false,
  deleteModal: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setAddModal: (state, action) => {
      state.addModal = action.payload;
    },
    setUpdateModal: (state, action) => {
      state.updateModal = action.payload;
    },
    setDeleteModal: (state, action) => {
      state.deleteModal = action.payload;
    },
  },
});

export const { setAddModal, setUpdateModal, setDeleteModal } = modalSlice.actions;

export default modalSlice.reducer;
