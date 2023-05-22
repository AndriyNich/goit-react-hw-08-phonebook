import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
//
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import { fetchContact } from 'redux/contact/slice';
import { selectContacts } from 'redux/contacts/selectors';
import { fetchContactModal, modalsType } from 'redux/modals/slice';

export function TableCellActions({ id }) {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = () => {
    const contact = items.filter(elem => elem.id === id)[0];
    dispatch(fetchContact(contact));
    dispatch(fetchContactModal(modalsType.CONTACTS));
  };

  return (
    <TableCell align="center">
      <IconButton aria-label="edit" onClick={handleEditContact}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={handleDeleteContact}>
        <DeleteForeverIcon />
      </IconButton>
    </TableCell>
  );
}

TableCellActions.propTypes = {
  id: PropTypes.string.isRequired,
};
