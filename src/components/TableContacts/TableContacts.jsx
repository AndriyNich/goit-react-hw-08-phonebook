import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
//
import { TableCellActions } from './TableCellActions/TableCellActions';

const list = [
  { id: '1', name: 'Vasya', number: '999-99-99' },
  { id: '2', name: 'sdfsdf', number: '123-99-99' },
  { id: '3', name: 'adf adf adf', number: '234-99-99' },
  { id: '4', name: 'wertno wlertj', number: '345-99-99' },
  { id: '5', name: 'Frgdn sjdf ', number: '456-99-99' },
  { id: '6', name: 'Frgdn sjdf ', number: '456-99-99' },
];

export function TableContacts() {
  return (
    <>
      <Button
        variant="outlined"
        sx={{ marginBottom: 2, marginTop: 2 }}
        startIcon={<AddIcon />}
        onClick={() => {
          console.log('add contact');
        }}
      >
        Add contact
      </Button>
      <Paper sx={{ width: 700 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader
            sx={{ minWidth: 650, maxWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Contact name</TableCell>
                <TableCell>Phone number</TableCell>
                <TableCell align="center">actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map(row => (
                <TableRow
                  hover
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCellActions id={row.id} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
