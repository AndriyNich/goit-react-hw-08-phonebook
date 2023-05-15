import { configureStore } from '@reduxjs/toolkit';

import { modalsReducer } from './Modals/ModalsSlice';

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
  },
});
