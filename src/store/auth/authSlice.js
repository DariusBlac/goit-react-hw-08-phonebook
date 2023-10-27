import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, refreshThunk, registrationThunk } from './thunk';
import Notiflix from 'notiflix';

const initialState = {
  isLogin: false,
  token: '',
  profile: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
  state.isLogin = true;
};

const handleAuthRejected = state => {
  state.isLogin = false;
  Notiflix.Notify.failure('Incorrect login or password');
};

const handleAuthRefreshFulfilled = (state, { payload }) => {
  state.isLogin = true;
  state.profile = payload;
};

const handleAuthRefreshRejected = (state, error) => {
  state.isLogin = false;
  console.log(error);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.profile = null;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.rejected, handleAuthRejected)
      .addCase(registrationThunk.rejected, handleAuthRejected)
      .addCase(refreshThunk.fulfilled, handleAuthRefreshFulfilled)
      .addCase(refreshThunk.rejected, handleAuthRefreshRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
