import React from 'react';
import { styled } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//
import { MyTableRow } from './MyTableRow/MyTableRow';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

// const list = [
//   { id: '1', name: 'Vasya', number: '999-99-99' },
//   { id: '2', name: 'sdfsdf', number: '123-99-99' },
//   { id: '3', name: 'adf adf adf', number: '234-99-99' },
//   { id: '4', name: 'wertno wlertj', number: '345-99-99' },
//   { id: '5', name: 'Frgdn sjdf ', number: '456-99-99' },
//   { id: '6', name: 'Frgdn sjdf ', number: '456-99-99' },
// ];

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e8eaed',
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

export function TableContacts() {
  const { items } = useSelector(selectVisibleContacts);

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Contact name</StyledTableCell>
              <StyledTableCell>Phone number</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(row => (
              <MyTableRow key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
