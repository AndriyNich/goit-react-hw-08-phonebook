import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  patchContact,
} from './operation';
import { authOperations } from 'redux/auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [patchContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [patchContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [authOperations.logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
    [patchContact.fulfilled](state, action) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].name = action.payload.name;
          state.items[i].number = action.payload.number;
        }
      }
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
