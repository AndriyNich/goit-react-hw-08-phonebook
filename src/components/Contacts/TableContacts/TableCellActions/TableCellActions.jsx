import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
//
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';

export function TableCellActions({ id }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <TableCell align="center">
      <IconButton
        aria-label="edit"
        onClick={() => {
          console.log(`edit ${id}`);
        }}
      >
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
