import { selectContacts } from '../../redux/contactsSlice';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filtersSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={css.contactsDiv}>
      {visibleContacts.map(item => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
};
