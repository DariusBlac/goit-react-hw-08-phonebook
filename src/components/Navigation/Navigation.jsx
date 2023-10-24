import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from 'store/auth/selectors';
import { AuthMenu } from './AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';

export default function Navigation() {
  const isAuth = useSelector(authSelector);
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate('contacts');
              }}
            >
              Contacts
            </Button>
            {!isAuth && <AuthMenu />}
            {isAuth && <UserMenu />}
          </Toolbar>
        </AppBar>
      </Box>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
