import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  number: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    newContact: {
      reducer(state, action) {
        state.id = '';
        state.name = '';
        state.number = '';
      },
    },
    fetchContact: {
      reducer(state, action) {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.number = action.payload.number;
      },
    },
  },
});

export const contactReducer = contactSlice.reducer;

export const { newContact, fetchContact } = contactSlice.actions;
