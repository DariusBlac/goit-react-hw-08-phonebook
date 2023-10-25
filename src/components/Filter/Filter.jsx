import { Box, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'store/contacts/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputFilterValue = event => {
    const value = event.target.value;
    dispatch(filterContacts(value));
  };

  return (
    <Box>
      <Typography component="h3" variant="h3">
        Filter contacts by Name
      </Typography>
      <TextField
        sx={{ mt: 3 }}
        type="text"
        onChange={inputFilterValue}
        placeholder="Darius Black"
        fullWidth
        label="Name"
      />
    </Box>
  );
};
