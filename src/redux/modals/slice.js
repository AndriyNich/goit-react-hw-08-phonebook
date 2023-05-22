import { createSlice } from '@reduxjs/toolkit';
// import { fetchContact } from 'redux/contact/slice';

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
        state.isOpen = action.payload !== modalsType.NULL;
        state.modalType = action.payload;
      },
    },
    fetchContactModal: {
      reducer(state, action) {
        console.log(`fetchContact in modals ${action.payload}`);
        state.isOpen = action.payload !== modalsType.NULL;
        if (action.payload.id !== '') {
          state.modalType = modalsType.CONTACTS;
        }
      },
    },
  },
  extraReducers: {},
});

export const { setModalStatus, fetchContactModal } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
