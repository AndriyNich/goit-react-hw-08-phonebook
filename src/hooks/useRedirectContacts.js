import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authSelectors from 'redux/auth/selectors';

export function useRedirectContacts() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();
  // const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  if (isLoggedIn) {
    console.log('redirect');
    navigate('/contacts');
  }
}
