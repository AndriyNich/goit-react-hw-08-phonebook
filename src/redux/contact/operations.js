import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';

// export const fetchContact = createAsyncThunk(
//   'contact/FetchContact',
//   async (contactID, thunkAPI) => {
//     try {
//       const contact = selectContacts.filter(elem => elem.id === contactID);
//       console.log(contact);
//       return contact;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
