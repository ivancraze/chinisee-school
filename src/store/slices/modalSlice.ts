import { createSlice } from '@reduxjs/toolkit';
import { IModalState } from '../../types/modal';

const initialState: IModalState = {
  isModalVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModalVisible = true;
    },
    closeModal: (state) => {
      state.isModalVisible = false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
