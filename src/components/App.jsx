import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout';
import { authOperations } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { modalsType } from 'redux/modals/slice';
import { ModalWraper } from './ModalWraper/ModalWraper';

const HomePage = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<ModalWraper />}
              type={modalsType.REGISTRATION}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<ModalWraper />}
              type={modalsType.LOGIN}
            />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
