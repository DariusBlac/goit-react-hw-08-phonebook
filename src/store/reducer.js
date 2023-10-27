import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/slice';
import { modalReducer } from './modal/modalSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = {
  contacts: contactsReducer,
  auth: persistedReducer,
  modal: modalReducer,
};
