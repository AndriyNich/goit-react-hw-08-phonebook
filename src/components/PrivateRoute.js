import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const token = useSelector(authSelectors.getToken);
  const shouldRedirect = isLoggedIn || isRefreshing || token;
  return shouldRedirect ? Component : <Navigate to={redirectTo} />;
};
