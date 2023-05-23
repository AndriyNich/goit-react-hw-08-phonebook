import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { modalsType, setModalStatus } from 'redux/modals/slice';
import { authOperations } from 'redux/auth/operations';
import authSelectors from 'redux/auth/selectors';
import { Navigation } from 'components/Navigation/Navigation';

export default function MainMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const username = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getEmail);
  const [anchorEl, setAnchorEl] = useState(null); // (useState < null) | (HTMLElement > null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const handleSingIn = () => {
    handleClose();
    dispatch(setModalStatus(modalsType.LOGIN));
  };

  const handleMyAccount = () => {
    handleClose();
  };

  const handleRegistration = () => {
    handleClose();
    dispatch(setModalStatus(modalsType.REGISTRATION));
  };

  const handleLogOut = () => {
    handleClose();
    dispatch(authOperations.logOut());
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          width: '800px',
          margin: '0 auto',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {isLoggedIn ? (
              <Avatar sx={{ fontWight: 700, fontSize: 20 }}>
                {username[0].charAt(0)}
              </Avatar>
            ) : (
              <Avatar />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {!isLoggedIn && (
          <MenuItem onClick={handleSingIn}>
            <Avatar /> SingIn
          </MenuItem>
        )}
        {isLoggedIn && (
          <MenuItem onClick={handleMyAccount}>
            <Avatar /> {`${username} (${email})`}
          </MenuItem>
        )}
        <Divider />
        {!isLoggedIn && (
          <MenuItem onClick={handleRegistration}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
        )}
        {isLoggedIn && (
          <MenuItem onClick={handleLogOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}
