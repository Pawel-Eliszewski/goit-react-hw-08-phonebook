import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
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
            alt="Login user"
          />
        </button>
      </form>
    </div>
  );
};
