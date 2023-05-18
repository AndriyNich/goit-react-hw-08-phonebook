import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import MainMenu from './MainMenu/MainMenu';
import { ModalWraper } from './ModalWraper/ModalWraper';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <MainMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ModalWraper />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
