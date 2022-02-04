import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
// import { contactsSelectors } from 'redux/contacts';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
