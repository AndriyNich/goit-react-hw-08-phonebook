import { createSlice } from '@reduxjs/toolkit';

export const modalStatus = {
  OPEN: true,
  CLOSE: false,
};

export const modalsType = {
  NULL: 'null',
  CONTACTS: 'contacts',
  LOGIN: 'login',
  REGISTRATION: 'registration',
};

const modalsInitialSate = {
  isOpen: false,
  modalType: modalsType.NULL,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState: modalsInitialSate,
  reducers: {
    setModalStatus: {
      reducer(state, action) {
        console.log(`open modal ${action.payload}`);
        state.isOpen = action.payload !== modalsType.NULL;
        state.modalType = action.payload;
      },
    },
  },
});

export const { setModalStatus } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
