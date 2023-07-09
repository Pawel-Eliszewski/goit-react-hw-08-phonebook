import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectContacts,
  selectFilter,
} from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { contactsAmount } from 'utils/notifications';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
    contactsAmount(contacts.length);
  }, [contacts.length, dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleUpperCase().includes(filter.trim())
  );

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {error && <p>{error}</p>}
        {contacts.length > 0 ? (
          filteredContacts.map(contact => {
            return (
              <div className={css.wrapper} key={contact.id}>
                <li className={css.name}>
                  {`${contact.name}`}{' '}
                  <dt>
                    <a
                      className={css.phone}
                      href={`tel:${contact.number}`}
                    >{`${contact.number}`}</a>
                  </dt>
                </li>
                <button
                  className={css.btn}
                  onClick={() => handleDelete(contact.id)}
                >
                  <img
                    className={css.icon}
                    src={require('../../images/deleteIconRed.png')}
                    alt="Delete contact"
                  />
                </button>
              </div>
            );
          })
        ) : (
          <h4>Your Phonebook is empty</h4>
        )}
      </ul>
    </div>
  );
};
