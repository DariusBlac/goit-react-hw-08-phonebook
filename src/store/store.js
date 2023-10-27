import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);