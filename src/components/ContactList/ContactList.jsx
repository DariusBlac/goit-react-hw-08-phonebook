import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, getAllThunk } from 'store/contacts/thunk';
import { useEffect } from 'react';
import {
  contactsFilterSelector,
  contactsSelector,
} from 'store/contacts/selectors';
import { Box } from '@mui/material';
import BasicModal from 'components/Modal/Modal';

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(contactsFilterSelector);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactThunk(id))
      .unwrap()
      .then(() => {
        dispatch(getAllThunk());
      })
      .catch(error => {
        console.log(error);
      });
  };

  let filteredContacts = null;
  filteredContacts = contacts.items.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(getAllThunk());
  }, [dispatch]);

  const createdListItems = array => {
    return array.map(el => {
      return (
        <Box key={el.id} component="li" sx={{ display: 'flex', width: '100%' }}>
          <ContactItem
            el={el}
            name={el.name}
            number={el.number}
            onClickDelete={handleDelete}
            id={el.id}
          />
        </Box>
      );
    });
  };

  return (
    <>
      <ul className={css.list}>
        {filteredContacts
          ? createdListItems(filteredContacts)
          : createdListItems(contacts.items)}
      </ul>
      <BasicModal />
    </>
  );
};
