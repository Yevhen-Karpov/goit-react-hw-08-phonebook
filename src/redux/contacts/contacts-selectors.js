import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.users.contacts;
const getFilter = state => state.users.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const getFilteredContacts = contacts => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(text =>
        text.name.toLowerCase().includes(normalizedFilter),
      );
    };

    return getFilteredContacts(contacts);
  },
);

const contactsSelectors = {
  getContacts,
  getFilter,
  getVisibleContacts,
};

export default contactsSelectors;
