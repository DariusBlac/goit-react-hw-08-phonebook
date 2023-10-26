import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContactThunk, getAllThunk } from 'store/contacts/thunk';
import { contactsSelector } from 'store/contacts/selectors';
import { Box, Button, Grid, TextField } from '@mui/material';

export const FormCreateContact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const createContact = body => {
    const isAlreadyExist = contacts.items.find(
      el => el.name.toLowerCase() === body.name.toLowerCase()
    );
    if (isAlreadyExist)
      return alert(`${isAlreadyExist.name} is already in contacts`);
    dispatch(createContactThunk(body))
      .unwrap()
      .then(() => {
        dispatch(getAllThunk());
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    else setPhone(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    createContact({ name, number: phone });
    setName('');
    setPhone('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Darius Black"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            fullWidth
            label="Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9+]*',
            }}
            type="tel"
            name="number"
            onChange={handleChange}
            value={phone}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            fullWidth
            label="Number"
            placeholder="+31 636363634"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        sx={{ margin: '30px auto 20px', display: 'block' }}
      >
        Add contact
      </Button>
    </Box>
  );
};
