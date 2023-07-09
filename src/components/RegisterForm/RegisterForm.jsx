import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label} htmlFor="name">
          Username
          <input className={css.input} id="name" type="text" name="name" />
        </label>
        <label className={css.label} htmlFor="email">
          Email
          <input className={css.input} id="email" type="email" name="email" />
        </label>
        <label className={css.label} htmlFor="password">
          Password
          <input
            className={css.input}
            id="password"
            type="password"
            name="password"
          />
        </label>
        <button className={css.btn} type="submit">
          <img
            className={css.icon}
            src={require('../../images/userIconRed.png')}
            alt="Register user"
          />
        </button>
      </form>
    </div>
  );
};
