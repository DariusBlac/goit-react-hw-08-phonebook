import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  createContactThunk,
  deleteContactThunk,
  editContactThunk,
  getAllThunk,
} from './thunk';
import Notiflix from 'notiflix';

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const handleRejected = (state, { error }) => {
  state.contacts.isLoading = false;
  state.contacts.error = error.message;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(createContactThunk.fulfilled, () => {
        Notiflix.Notify.success('Contact added');
      })
      .addCase(editContactThunk.fulfilled, () => {
        Notiflix.Notify.success('Contact edit');
      })
      .addCase(deleteContactThunk.fulfilled, () => {
        Notiflix.Notify.success('Contact delete');
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
