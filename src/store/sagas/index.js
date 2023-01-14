import { put, takeEvery } from 'redux-saga/effects';

import { showModal, closeModal } from '../slices/modalSlice';
function* visibleModal() {
  yield put(showModal());
}
function* hideModal() {
  yield put(closeModal());
}
export function* watchVisibleModal() {
  yield takeEvery('saga/showModal', visibleModal);
  yield takeEvery('saga/closeModal', hideModal);
}
