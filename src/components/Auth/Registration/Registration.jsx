import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setModalStatus, modalsType } from 'redux/modals/slice';
import { authOperations } from 'redux/auth/operations';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from 'services/yup';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmitForm = data => {
    const { email, login, password } = data;
    dispatch(
      authOperations.register({
        name: login,
        email: email,
        password: password,
      })
    ).then(() => {
      dispatch(setModalStatus(modalsType.NULL));
    });
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '380px' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <TextField
        id="login"
        label="Login"
        variant="outlined"
        autoFocus
        error={!!errors.login}
        helperText={errors.login ? errors.login.message : ''}
        {...register('login')}
      />
      <TextField
        id="email"
        label="e-mail"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
        {...register('email')}
      />
      <FormControl
        sx={{ m: 1, width: '25ch' }}
        variant="outlined"
        error={!!errors.password}
      >
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
          {...register('password')}
        />
        <FormHelperText id="password-text">
          {errors.password ? errors.password.message : ''}
        </FormHelperText>
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
          dispatch(setModalStatus(modalsType.NULL));
        }}
      >
        Exit
      </Button>
    </Box>
  );
};

export default Registration;
