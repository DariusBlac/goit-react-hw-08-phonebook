import { FormCreateContact } from 'components/Forms/FormCreateContact';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { contactsErrorSelector } from 'store/contacts/selectors';
import { Box, Typography } from '@mui/material';
import Notiflix from 'notiflix';

const Contacts = () => {
  const error = useSelector(contactsErrorSelector);

  return (
    <Box
      sx={{
        margin: '20px auto 0px',
        width: '600px',
      }}
    >
      <Typography component="h2" variant="h3">
        Create contact
      </Typography>
      <FormCreateContact />
      {error && Notiflix.Notify.failure('Something with wrong')}
      <Filter />

      <ContactList />
    </Box>
  );
};

export default Contacts;
