export const selectContacts = state => state.contacts;

export const selectVisibleContacts = state => {
  return selectContacts(state);
};
