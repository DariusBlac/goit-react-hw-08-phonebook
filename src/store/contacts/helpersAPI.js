import { instance } from 'store/auth/helpersAPI';

export const getAllContacts = async () => {
  const { data } = await instance('/contacts');
  return data;
};

export const createContact = async contact => {
  return await instance.post('/contacts', contact);
};

export const deleteContact = async id => {
  await instance.delete(`/contacts/${id}`);
};

export const editContact = async (id, body) => {
  await instance.patch(`/contacts/${id}`, body);
};
