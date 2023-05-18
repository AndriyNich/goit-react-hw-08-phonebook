import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setModalStatus, modalsType } from 'redux/modals/slice';
import { authOperations } from 'redux/auth/operations';
import { selectModals } from 'redux/modals/selectors';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
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
    // dispatch(selectModals(modalsType.NULL));
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
      <TextField id="login" label="Login" variant="outlined" />
      <TextField id="email" label="e-mail" variant="outlined" />
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
        type="submit"
        sx={{ marginBottom: 2, marginTop: 2 }}
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
    </Box>
  );
};

export default Registration;
