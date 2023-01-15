import { put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { showModal, closeModal } from '../slices/modalSlice';
import { ModalsType } from '../../constants';

function* visibleModal(action: PayloadAction<ModalsType>) {
  yield put(showModal(action.payload));
}
function* hideModal() {
  yield put(closeModal());
}
export function* watchVisibleModal() {
  yield takeEvery('saga/showModal', visibleModal);
  yield takeEvery('saga/closeModal', hideModal);
}
