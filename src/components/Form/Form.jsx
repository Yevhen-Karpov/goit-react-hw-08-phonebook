import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { makeStyles } from '@mui/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import s from './Form.module.css';

const useStyles = makeStyles({
  input: {
    width: '300px',
    padding: '8px',
    display: 'block',
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: 8,
  },
});

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onSubmit = (name, number) => {
    dispatch(contactsOperations.addContact(name, number));
  };

  const handleNameChange = ({ currentTarget: { value } }) => {
    setName(value);
  };

  const handleNumberChange = ({ currentTarget: { value } }) => {
    setNumber(value);
  };

  const handleAddContact = e => {
    e.preventDefault();

    const isRepeatContact = contacts.find(contact => contact.name === name);

    if (isRepeatContact) {
      alert(`${name} is already in contacts.`);
      resetState();
      return;
    }

    onSubmit({ name, number });
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleAddContact}>
        {/* <label className={s.label}>
          <br /> */}

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
          id="outlined-name"
          label="Name"
          color="primary"
          fullWidth
          focused
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        {/* <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
          /> */}
        {/* </label> */}
        <TextField
          // className={classes.input}
          style={{
            width: '300px',
            padding: '8px',
            display: 'block',
            marginTop: '20px',
            marginBottom: '20px',
            borderRadius: 8,
          }}
          required
          id="outlined-name"
          label="Phone"
          color="primary"
          fullWidth
          focused
          type="text"
          name="number"
          value={number}
          onChange={handleNumberChange}
        />
        <LoadingButton
          style={{
            width: '300px',
            // padding: '8px',
            // display: 'block',
            marginTop: '20px',
            marginBottom: '20px',
            borderRadius: 8,
          }}
          color="primary"
          onClick={handleAddContact}
          // loading={loading}
          // loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save contact
        </LoadingButton>
        {/* <button className={s.button} type="submit">
          Add contact
        </button> */}
      </form>
    </div>
  );
}
