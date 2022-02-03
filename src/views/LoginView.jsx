import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import s from '../components/Form/Form.module.css';
// import { yupResolver } from '@hookform/resolvers';
// import * as yup from 'yup';

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Email
          <br />
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password
          <br />
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>
        <button className={s.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
