import { Book } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

export const Home = () => {
  return (
    <Box
      sx={{
        marginTop: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1" component="h1">
        PhoneBook App
      </Typography>
      <Book sx={{ color: blue[700], fontSize: 80, marginLeft: '20px' }} />
    </Box>
  );
};
