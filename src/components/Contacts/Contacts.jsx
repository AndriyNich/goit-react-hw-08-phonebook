import React from 'react';
import { ButtonAdd } from './Buttons/ButtonAdd/ButtonAdd';
import { TableContacts } from './TableContacts/TableContacts';
import { WraperContacts } from './Contacts.styled';
import Filter from 'components/Filter/Filter';
import { Box } from '@mui/material';

export function Contacts() {
  return (
    <WraperContacts>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Filter />
        <ButtonAdd />
      </Box>
      <TableContacts />
    </WraperContacts>
  );
}
