import { useSelector } from 'react-redux';
import { StyleNav, StyleNavLink } from './Navigation.styled';
import authSelectors from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <StyleNav>
      <StyleNavLink to="/" end>
        Home
      </StyleNavLink>
      {isLoggedIn && <StyleNavLink to="/contacts">Contacts</StyleNavLink>}
    </StyleNav>
  );
};
