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
      reducer(state) {
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
  extraReducers: {},
});

export const contactReducer = contactSlice.reducer;

export const { newContact, fetchContact } = contactSlice.actions;
