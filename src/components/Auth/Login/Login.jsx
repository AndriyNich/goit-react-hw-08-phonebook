import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useDispatch } from 'react-redux';
// import { modalStatus, setModalStatus } from 'redux/Modals/ModalsSlice';

export function Login() {
  //   const dispatch = useDispatch();

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '380px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="login" label="Login" variant="outlined" />
      <TextField id="password" label="Password" variant="outlined" />
      <Button
        variant="outlined"
        sx={{ marginBottom: 2, marginTop: 2 }}
        onClick={() => {
          console.log('SingIn');
        }}
      >
        SingIn
      </Button>
      <Button
        variant="outlined"
        sx={{ marginBottom: 2, marginTop: 2 }}
        onClick={() => {
          console.log('Registration');
          // dispatch(setModalStatus(modalStatus.CLOSE));
        }}
      >
        Registration
      </Button>
    </Box>
  );
}
