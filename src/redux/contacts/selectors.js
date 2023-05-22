import { selectFilter } from 'redux/filter/selectors';

export const selectContacts = state => state.contacts;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  const filterL = filter.toLowerCase().trim();
  return {
    ...contacts,
    items: contacts.items.filter(elem =>
      elem.name.toLowerCase().includes(filterL)
    ),
  };
};

export const selectLoading = state => state.contacts.isLoading;
