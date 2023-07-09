import { ContactsBar } from 'components/ContactsBar/ContactsBar';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <>
      <ContactsBar />
      <div className={css.main}>
        <ContactsForm />
        <ContactsList />
        <ContactsFilter />
      </div>
    </>
  );
}
