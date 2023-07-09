import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { nameAlreadyInContacts } from 'utils/notifications';
import css from './ContactsForm.module.css';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (!contacts.map(contact => contact.name).includes(name)) {
      dispatch(addContact({ name, number }));
    } else {
      nameAlreadyInContacts(name);
    }
    form.reset();
  };

  return (
    <div className={css.container}>
      <form type="submit" className={css.form} onSubmit={handleSubmit}>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            id="name"
            type="text"
            name="name"
            placeholder="Enter name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.label} htmlFor="phone">
            Number
          </label>
          <input
            className={css.input}
            id="phone"
            type="tel"
            name="number"
            placeholder="Enter phone number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit" className={css.btn}>
          <img
            className={css.icon}
            src={require('../../images/addContactIconRed.png')}
            alt="Add new contact"
          />
        </button>
      </form>
    </div>
  );
};
