import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'store/auth/authSlice';
import { profileSelector } from 'store/auth/selectors';
import { Typography } from '@mui/material';
import { deleteToken } from 'store/auth/helpersAPI';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(profileSelector);

  return (
    user && (
      <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle1" component="h2">
          Welcome {user.name}
        </Typography>

        <Button
          color="inherit"
          onClick={() => {
            dispatch(logOut());
            deleteToken();
            navigate('login');
          }}
        >
          Logout
        </Button>
      </Box>
    )
  );
};
