import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input value={name} onChange={e => setName(e.target.value)} required />
      <label>Number</label>
      <input value={number} onChange={e => setNumber(e.target.value)} required />
      <button type="submit">Add Contact</button>
    </form>
  );
};