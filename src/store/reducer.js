import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/slice';

export const reducer = {
  contacts: contactsReducer,
  auth: authReducer,
};
