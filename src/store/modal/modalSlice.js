import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.showModal = true;
      state.element = payload;
    },
    closeModal: state => {
      state.showModal = false;
      state.element = null;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
