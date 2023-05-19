import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setModalStatus } from 'redux/modals/slice';

export const RestrictedRoute = ({ type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModalStatus(type));
  }, [dispatch, type]);

  return;
};
