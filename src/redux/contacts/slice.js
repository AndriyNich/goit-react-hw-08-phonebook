import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from './operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
