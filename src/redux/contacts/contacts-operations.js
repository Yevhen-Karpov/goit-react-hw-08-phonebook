import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/contactsFetch-api';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getALLContacts = createAsyncThunk(
  'contacts/getALLContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await contactsApi.fetchContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (payload, { rejectWithValue }) => {
    try {
      return await contactsApi.fetchAddContact(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const contact = await contactsApi.fetchDeleteContact(payload);
      console.log(contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const contactsOperations = { getALLContacts, addContact, deleteContact };

export default contactsOperations;
