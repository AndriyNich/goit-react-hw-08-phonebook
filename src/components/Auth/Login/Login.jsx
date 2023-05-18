import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { authOperations } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
// import { modalStatus, setModalStatus } from 'redux/Modals/ModalsSlice';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const handleSubmit = event => {
    console.log('submit');
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    dispatch(
      authOperations.logIn({ email: email.value, password: password.value })
    );
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
      <TextField id="email" label="Email" variant="outlined" />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        variant="outlined"
        sx={{ marginBottom: 2, marginTop: 2 }}
        type="submit"
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
};

export default Login;
