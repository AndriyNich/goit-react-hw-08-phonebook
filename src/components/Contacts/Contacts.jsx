import React from 'react';
import { ButtonAdd } from './Buttons/ButtonAdd/ButtonAdd';
import { TableContacts } from './TableContacts/TableContacts';
import { WraperContacts } from './Contacts.styled';

export function Contacts() {
  return (
    <WraperContacts>
      <ButtonAdd />
      <TableContacts />
    </WraperContacts>
  );
}
