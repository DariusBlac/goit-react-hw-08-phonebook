import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { createContactThunk, deleteContactThunk, getAllThunk } from './thunk';
import Notiflix from 'notiflix';

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const handleRejected = (state, { error }) => {
  state.contacts.isLoading = false;
  state.contacts.error = error.message;
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
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(createContactThunk.fulfilled, state => {
        state.contacts.isLoading = false;
        Notiflix.Notify.success('Contact added');
      })
      .addCase(deleteContactThunk.fulfilled, state => {
        state.contacts.isLoading = false;
        Notiflix.Notify.success('Contact delete');
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
