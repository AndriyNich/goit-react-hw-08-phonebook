import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './operations';
import { toast } from 'react-hot-toast';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const showError = (_, action) => {
  toast.error(action.payload);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.rejected]: showError,
    [authOperations.logIn.rejected]: showError,
    [authOperations.logOut.rejected]: showError,

    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.refreshUser.rejected](state, action) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
