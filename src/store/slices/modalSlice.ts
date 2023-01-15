import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalState } from '../../types/modal';
import { ModalsType } from '../../constants';

const initialState: IModalState = {
  modalComponent: null,
  isModalVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalsType>) => {
      state.modalComponent = action.payload;
      state.isModalVisible = true;
    },
    closeModal: (state) => {
      state.isModalVisible = false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
