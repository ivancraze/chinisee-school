import { createSlice } from '@reduxjs/toolkit';

import { IUserRegisterRequest } from '../../types/user';

const initialState: IUserRegisterRequest = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: '',
};

const userSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    registerUser: (state, action) => {},
    registerUserSuccess: (state, action) => {},
    registerUserError: (state, action) => {},
    authUser: (state, action) => {},
    authUserSuccess: (state, action) => {},
    authUserError: (state, action) => {},
    logoutUser: (state, action) => {},
  },
});

export const {
  registerUser,
  registerUserSuccess,
  registerUserError,
  authUser,
  authUserSuccess,
  authUserError,
  logoutUser,
} = userSlice.actions;

export default userSlice.reducer;
