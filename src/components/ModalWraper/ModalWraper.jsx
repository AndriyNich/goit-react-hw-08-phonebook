import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { selectModals } from 'redux/selectors';
import { setModalStatus, modalsType } from 'redux/Modals/ModalsSlice';
import { ContactInfo } from 'components/Contacts/ContactInfo/ContactInfo';
import { Login } from 'components/Auth/Login/Login';
import { Registration } from 'components/Auth/Registration/Registration';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function ModalWraper({ children }) {
  const { modalType } = useSelector(selectModals);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalStatus(modalsType.NULL));
  };

  return (
    <Modal
      open={modalType !== modalsType.NULL}
      onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {modalType === modalsType.CONTACTS && <ContactInfo />}
        {modalType === modalsType.LOGIN && <Login />}
        {modalType === modalsType.REGISTRATION && <Registration />}
      </Box>
    </Modal>
  );
}
