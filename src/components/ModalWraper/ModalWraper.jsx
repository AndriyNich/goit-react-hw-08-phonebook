import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { selectModals } from 'redux/selectors';
import { setModalStatus, modalStatus } from 'redux/Modals/ModalsSlice';

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
  const { isOpen } = useSelector(selectModals);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalStatus(modalStatus.CLOSE));
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
