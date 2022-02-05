import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import TextField from '@mui/material/TextField';
import contactsActions from '../../redux/contacts/contacts-actions';
// import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  return (
    <TextField
      style={{
        width: '350px',
        padding: '8px',
        display: 'block',
        marginTop: '20px',
        marginBottom: '30px',
        marginLeft: '55px',
        borderRadius: 8,
      }}
      id="outlined-helperText"
      label="Find contact"
      value={value}
      onChange={onChange}
      fullWidth
      focused
      // defaultValue="Default Value"
      // helperText="Some important text"
    />
    // <label className={s.label}>
    //   Find contacts by name
    //   <input
    //     className={s.input}
    //     type="text"
    //     value={value}
    //     onChange={onChange}
    //   />
    // </label>
  );
}
