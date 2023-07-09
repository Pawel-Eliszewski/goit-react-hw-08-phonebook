import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import css from './ContactsFilter.module.css';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    let value = e.currentTarget.value.toUpperCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="filter">
        Search contact by name
      </label>
      <input
        onChange={handleInput}
        className={css.input}
        id="filter"
        type="text"
        name="name"
        placeholder="Enter name"
        autoComplete="off"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
