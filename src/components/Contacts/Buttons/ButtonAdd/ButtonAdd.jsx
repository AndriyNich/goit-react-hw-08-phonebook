import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { ModalWraper } from 'components/ModalWraper/ModalWraper';
import { ContactInfo } from 'components/Contacts/ContactInfo/ContactInfo';
import { setModalStatus, modalStatus } from 'redux/Modals/ModalsSlice';
import { selectModals } from 'redux/selectors';

export function ButtonAdd() {
  const { isOpen } = useSelector(selectModals);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="outlined"
        sx={{ marginBottom: 2, marginTop: 2 }}
        startIcon={<AddIcon />}
        onClick={() => {
          console.log('add contact');
          dispatch(setModalStatus(modalStatus.OPEN));
        }}
      >
        Add contact
      </Button>
      {isOpen && (
        <ModalWraper>
          <ContactInfo />
        </ModalWraper>
      )}
    </>
  );
}
