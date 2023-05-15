import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ButtonWraper } from './ContactInfo.styled';
import { useDispatch } from 'react-redux';
import { modalStatus, setModalStatus } from 'redux/Modals/ModalsSlice';

export function ContactInfo() {
  const dispatch = useDispatch();

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '380px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="contact-name" label="Contact name" variant="outlined" />
      <TextField id="phone-number" label="Phone number" variant="outlined" />
      <ButtonWraper>
        <Button
          variant="outlined"
          sx={{ marginBottom: 2, marginTop: 2 }}
          onClick={() => {
            console.log('Save');
          }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          sx={{ marginBottom: 2, marginTop: 2 }}
          onClick={() => {
            console.log('Exit');
            dispatch(setModalStatus(modalStatus.CLOSE));
          }}
        >
          Exit
        </Button>
      </ButtonWraper>
    </Box>
  );
}
