import React, { Suspense, lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { selectModals } from 'redux/modals/selectors';
import { setModalStatus, modalsType } from 'redux/modals/slice';
import authSelectors from 'redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

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

const LazyContactInfo = lazy(() =>
  import('components/Contacts/ContactInfo/ContactInfo.jsx')
);
const LazyLogin = lazy(() => import('components/Auth/Login/Login.jsx'));
const LazyRegistration = lazy(() =>
  import('components/Auth/Registration/Registration.jsx')
);

export function ModalWraper() {
  const { modalType } = useSelector(selectModals);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(setModalStatus(modalsType.NULL));
  };

  useEffect(() => {
    return navigate(isLoggedIn ? '/contacts' : '/');
  }, [navigate, isLoggedIn]);

  return (
    modalType !== modalsType.NULL && (
      <Modal open={modalType !== modalsType.NULL} onClose={handleClose}>
        <Box sx={style}>
          <Suspense fallback={<p>Loading ....</p>}>
            {modalType === modalsType.CONTACTS && <LazyContactInfo />}
            {modalType === modalsType.LOGIN && <LazyLogin />}
            {modalType === modalsType.REGISTRATION && <LazyRegistration />}
          </Suspense>
        </Box>
      </Modal>
    )
  );
}
