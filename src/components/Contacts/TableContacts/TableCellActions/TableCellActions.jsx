import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
//
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

export function TableCellActions({ id }) {
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
      <IconButton
        aria-label="delete"
        onClick={() => {
          console.log(`delete ${id}`);
        }}
      >
        <DeleteForeverIcon />
      </IconButton>
    </TableCell>
  );
}

TableCellActions.propTypes = {
  id: PropTypes.string.isRequired,
};
