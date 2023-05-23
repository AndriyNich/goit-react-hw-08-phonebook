import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { setModalStatus, modalsType } from 'redux/modals/slice';
import { newContact } from 'redux/contact/slice';

export function ButtonAdd() {
  const dispatch = useDispatch();

  return (
    <Button
      variant="outlined"
      sx={{ marginBottom: 2, marginTop: 2 }}
      startIcon={<AddIcon />}
      onClick={() => {
        dispatch(newContact());
        dispatch(setModalStatus(modalsType.CONTACTS));
      }}
    >
      Add contact
    </Button>
  );
}
