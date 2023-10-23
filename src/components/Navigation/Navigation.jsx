import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

export default function Navigation() {
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
            <Box sx={{ marginLeft: 'auto' }}>
              <Button
                color="inherit"
                onClick={() => {
                  navigate('register');
                }}
              >
                Register
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate('login');
                }}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
