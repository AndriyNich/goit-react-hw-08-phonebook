import { createSlice } from '@reduxjs/toolkit';

const modalsInitialSate = {
  isOpen: false,
};

export const modalStatus = {
  OPEN: true,
  CLOSE: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState: modalsInitialSate,
  reducers: {
    setModalStatus: {
      reducer(state, action) {
        console.log(`open modal ${action.payload}`);
        state.isOpen = action.payload;
      },
    },
  },
});

export const { setModalStatus } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
