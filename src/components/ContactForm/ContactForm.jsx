import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contactsSlice';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name cannot exceed 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\+?[0-9]{10,14}$/, 'Only numeric characters are allowed')
      .min(10, 'Minimum 10 characters required')
      .max(14, 'Maximum 14 characters allowed')
      .required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ ...values, id: new Date().toISOString() }));
    resetForm();
  };

  return (
    <div className={s.wraper}>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field 
              id="name"
              name="name"
              className={s.input}
              autoComplete="name"
            />
            <ErrorMessage name="name" component="span" className={s.errorMessage} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              id="number"
              name="number"
              className={s.input}
              autoComplete="tel"
            />
            <ErrorMessage name="number" component="span" className={s.errorMessage} />
          </label>
          <button className={s.btnAdd} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;