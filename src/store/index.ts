import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './slices/modalSlice';
import userReducer from './slices/userSlice';
import { watchVisibleModal } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchVisibleModal);
