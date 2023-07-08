import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';

export default function Contacts() {
  return (
    <div className="main">
      <ContactsForm />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
}
