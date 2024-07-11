import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';

export const App = () => {

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <SearchBox />
        <ContactList/>
      </div>
    </>
  );
};