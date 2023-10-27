import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  editContact,
  getAllContacts,
} from './helpersAPI';

export const getAllThunk = createAsyncThunk('contacts/getAll', async () => {
  const data = await getAllContacts();
  return data;
});

export const createContactThunk = createAsyncThunk(
  'contacts/create',
  async body => {
    const { data } = await createContact(body);
    return data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async id => {
    await deleteContact(id);
    return id;
  }
);

export const editContactThunk = createAsyncThunk(
  'contacts/edit',
  async body => {
    await editContact(body);
  }
);
