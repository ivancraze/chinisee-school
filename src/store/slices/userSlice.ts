import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IAuthState } from '../../types/user';

const initialState: IAuthState = {
  isLoggedIn: false,
  accessToken: '',
  user: {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  },
  errors: { message: '' },
};

export const registerRequest = createAsyncThunk(
  'user/registerRequest',
  async () => {},
);
const loginRequest = createAsyncThunk('user/loginRequest', async () => {});
const logoutRequest = createAsyncThunk('user/logoutRequest', async () => {});

const userSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.accessToken = 'token';
        state.isLoggedIn = true;
        state.errors.message = '';
      })
      .addCase(registerRequest.rejected, (state, action) => {
        state.errors.message = 'error';
      });

    builder
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.accessToken = 'token';
        state.isLoggedIn = true;
        state.errors.message = '';
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.errors.message = 'error';
      });

    builder
      .addCase(logoutRequest.fulfilled, (state, action) => {
        state.accessToken = 'token';
        state.isLoggedIn = true;
        state.errors.message = '';
      })
      .addCase(logoutRequest.rejected, (state, action) => {
        state.errors.message = 'error';
      });
  },
});

// export const {
//   registerUser,
//   registerUserSuccess,
//   registerUserError,
//   authUser,
//   authUserSuccess,
//   authUserError,
//   logoutUser,
// } = userSlice.actions;

export default userSlice.reducer;
