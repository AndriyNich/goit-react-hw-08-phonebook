import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setModalStatus, modalsType } from 'redux/Modals/ModalsSlice';
import { authOperations } from 'redux/auth/authOperations';
import { selectModals } from 'redux/selectors';

export function Registration() {
  const dispatch = useDispatch();

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '380px' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={event => {
        console.log('Submit');
        event.preventDefault();
        const { email, login, password } = event.currentTarget.elements;
        dispatch(
          authOperations.register({
            name: login.value,
            email: email.value,
            password: password.value,
          })
        );
        dispatch(selectModals(modalsType.NULL));
      }}
    >
      <TextField id="login" label="Login" variant="outlined" />
      <TextField id="email" label="e-mail" variant="outlined" />
      <TextField id="password" label="Password" variant="outlined" />
      <>
        <Button
          variant="outlined"
          type="submit"
          sx={{ marginBottom: 2, marginTop: 2 }}
          onClick={event => {
            console.log(event.currentTarget.elements);
            console.log('Save');
          }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          sx={{ marginBottom: 2, marginTop: 2 }}
          onClick={() => {
            console.log('Registration Exit');
            dispatch(setModalStatus(modalsType.NULL));
          }}
        >
          Exit
        </Button>
      </>
    </Box>
  );
}
