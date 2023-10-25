import { Box, Typography } from '@mui/material';

export const NotFound = () => {
  return (
    <Box
      sx={{
        marginTop: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1" component="h2">
        404
      </Typography>
      <Typography variant="h1" component="h1">
        Not Found
      </Typography>
      <Typography sx={{ marginTop: '20px' }} variant="h5" component="h5">
        The resource requested could not be found on this server!
      </Typography>
    </Box>
  );
};
