import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  id: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { toggleModal, closeModal, setId } = modalSlice.actions;
export default modalSlice.reducer;
