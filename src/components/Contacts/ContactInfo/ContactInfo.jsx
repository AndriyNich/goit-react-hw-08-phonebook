import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { modalsType, setModalStatus } from 'redux/modals/slice';
import { addContact, patchContact } from 'redux/contacts/operation';
import { selectContact } from 'redux/contact/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactSchema } from 'services/yup';

const ContactInfo = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const handleSubmitForm = data => {
    const { name, number } = data;

    if (contact.id !== '') {
      dispatch(patchContact({ id: contact.id, name, number }));
    } else {
      dispatch(addContact({ name, number }));
    }
    dispatch(setModalStatus(modalsType.NULL));
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
        error={!!errors.name}
        id="name"
        label="Contact name"
        variant="outlined"
        autoFocus
        defaultValue={contact.name}
        helperText={errors.name ? errors.name.message : ''}
        {...register('name')}
      />
      <TextField
        error={!!errors.number}
        id="number"
        label="Phone number"
        variant="outlined"
        defaultValue={contact.number}
        helperText={errors.number ? errors.number.message : ''}
        {...register('number')}
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
          dispatch(setModalStatus(modalsType.NULL));
        }}
      >
        Exit
      </Button>
    </Box>
  );
};

export default ContactInfo;
