import { configureStore } from '@reduxjs/toolkit';

import { modalsReducer } from './Modals/ModalsSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    auth: authReducer,
  },
});
