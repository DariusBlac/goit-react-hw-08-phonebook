import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registrationThunk } from './thunk';

const initialState = {
  token: '',
  profile: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
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
      .addCase(loginThunk.fulfilled, handleAuthFulfilled);
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
