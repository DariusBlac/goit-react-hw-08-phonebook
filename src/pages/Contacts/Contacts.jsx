import { FormCreateContact } from 'components/Forms/FormCreateContact';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from '../../components/App/App.module.css';
import { useSelector } from 'react-redux';
import { contactsErrorSelector } from 'store/contacts/selectors';

export const Contacts = () => {
  const error = useSelector(contactsErrorSelector);

  return (
    <div className={css.container}>
      <h1>Phone book</h1>
      <FormCreateContact />
      {error && <b>Something with wrong</b>}
      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};
