import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import s from '../components/Form/Form.module.css';

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
      <h1>Log in</h1>
      <form className={s.formRegistr} onSubmit={handleSubmit}>
        <TextField
          style={{
            width: '300px',
            padding: '8px',
            display: 'block',
            marginTop: '20px',
            marginBottom: '20px',
            borderRadius: 8,
          }}
          required
          id="outlined-email"
          label="Email"
          color="primary"
          fullWidth
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
        />

        <TextField
          style={{
            width: '300px',
            padding: '8px',
            display: 'block',
            marginTop: '20px',
            marginBottom: '20px',
            borderRadius: 8,
          }}
          required
          id="outlined-password"
          label="Password"
          color="primary"
          fullWidth
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
}
