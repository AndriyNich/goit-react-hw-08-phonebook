import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyleNav = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  gap: 30px;
`;

export const StyleNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  color: #1976d2;

  &.active {
    text-decoration: underline;
  }
`;
