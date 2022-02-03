// import { useSelector } from 'react-redux';
// import authSelectors from '../redux/auth/auth-selectors';
import ContactList from '../components/ContactList/ContactList';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import s from '../components/App/App.module.css';

export default function ContactsView() {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <h1>Phonebook</h1>
      <div className={s.container}>
        <div>
          <h2>Add contact</h2>
          <Form />
        </div>

        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}
