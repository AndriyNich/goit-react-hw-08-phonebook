import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { authOperations } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { modalsType, setModalStatus } from 'redux/modals/slice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthSchema } from 'services/yup';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(AuthSchema),
  });

  const dispatch = useDispatch();

  const handleSubmitForm = data => {
    const { email, password } = data;
    dispatch(authOperations.logIn({ email, password })).then(() => {
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
        error={!!errors.email}
        id="email"
        label="Email"
        variant="outlined"
        autoFocus
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
        sx={{ marginBottom: 2, marginTop: 2 }}
        type="submit"
      >
        SingIn
      </Button>
      <Button
        variant="outlined"
        sx={{ marginBottom: 2, marginTop: 2 }}
        onClick={() => {
          dispatch(setModalStatus(modalsType.REGISTRATION));
        }}
      >
        Registration
      </Button>
    </Box>
  );
};

export default Login;
