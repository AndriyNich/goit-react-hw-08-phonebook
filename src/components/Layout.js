import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import MainMenu from './MainMenu/MainMenu';
import { ModalWraper } from './ModalWraper/ModalWraper';
import { modalsType } from 'redux/modals/slice';
import { selectModals } from 'redux/modals/selectors';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const { modalType } = useSelector(selectModals);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <MainMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {modalType !== modalsType.NULL && <ModalWraper />}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
