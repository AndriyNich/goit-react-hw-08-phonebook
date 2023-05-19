import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { modalsType, setModalStatus } from 'redux/modals/slice';
import { addContact } from 'redux/contacts/operation';

const ContactInfo = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Save');
    const { name, number } = event.currentTarget.elements;
    dispatch(addContact({ name: name.value, number: number.value }));
  };

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
      <TextField id="name" label="Contact name" variant="outlined" autoFocus />
      <TextField id="number" label="Phone number" variant="outlined" />
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
