import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUserLarge, FaPhone } from "react-icons/fa6";
import s from './Contact.module.css'


const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  
  return (
    <li className={s.container}>
        <div className={s.contact}>
          <p><FaUserLarge className={s.icon} />{name}</p>
          <p><FaPhone className={s.icon} />{number}</p>
        </div>
        <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Contact;
