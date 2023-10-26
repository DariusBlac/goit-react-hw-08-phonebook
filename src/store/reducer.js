import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/slice';
import { modalReducer } from './modal/modalSlice';

export const reducer = {
  contacts: contactsReducer,
  auth: authReducer,
  modal: modalReducer,
};
