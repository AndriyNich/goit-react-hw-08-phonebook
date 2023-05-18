import { configureStore } from '@reduxjs/toolkit';

import { modalsReducer } from './modals/slice';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    auth: authReducer,
    contacts: contactsReducer,
  },
});
