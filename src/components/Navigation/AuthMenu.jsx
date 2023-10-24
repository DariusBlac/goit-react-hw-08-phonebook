import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const AuthMenu = () => {
  const navigate = useNavigate();

  return (
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
  );
};
