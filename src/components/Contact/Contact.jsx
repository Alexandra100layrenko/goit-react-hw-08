import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name}: {contact.phone}
      <button onClick={() => dispatch(removeContact(contact.id))}>Delete</button>
    </li>
  );
};