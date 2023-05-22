import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { modalsType, setModalStatus } from 'redux/modals/slice';
import { addContact, patchContact } from 'redux/contacts/operation';
import { selectContact } from 'redux/contact/selectors';

const ContactInfo = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);

  console.log(`id ${contact}`);
  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.currentTarget.elements;

    if (contact.id !== '') {
      dispatch(
        patchContact({ id: contact.id, name: name.value, number: number.value })
      );
    } else {
      dispatch(addContact({ name: name.value, number: number.value }));
    }
    dispatch(setModalStatus(modalsType.NULL));
  };

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '380px' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        label="Contact name"
        variant="outlined"
        autoFocus
        defaultValue={contact.name}
      />
      <TextField
        id="number"
        label="Phone number"
        variant="outlined"
        defaultValue={contact.number}
      />
      <Button
        variant="outlined"
        sx={{ marginBottom: 2, marginTop: 2 }}
        type="submit"
      >
        Save
      </Button>
      <Button
        variant="outlined"
        sx={{ marginBottom: 2, marginTop: 2 }}
        onClick={() => {
          console.log('Exit');
          dispatch(setModalStatus(modalsType.NULL));
        }}
      >
        Exit
      </Button>
    </Box>
  );
};

export default ContactInfo;
