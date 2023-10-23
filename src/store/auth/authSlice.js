import { createSlice } from '@reduxjs/toolkit';
import { registrationThunk } from './thunk';

const initialState = {
  token: '',
  email: '',
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registrationThunk.fulfilled, handleAuthFulfilled);
  },
});

export const authReducer = authSlice.reducer;
