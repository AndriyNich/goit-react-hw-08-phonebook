import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableCellActions } from '../TableCellActions/TableCellActions';

export function MyTableRow({ row }) {
  return (
    <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell>{row.number}</TableCell>
      <TableCellActions id={row.id} />
    </TableRow>
  );
}

MyTableRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
