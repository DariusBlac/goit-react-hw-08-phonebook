import { createAsyncThunk } from '@reduxjs/toolkit';
import { refreshCurrentUser, setToken, signIn, signUp } from './helpersAPI';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const data = await refreshCurrentUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
