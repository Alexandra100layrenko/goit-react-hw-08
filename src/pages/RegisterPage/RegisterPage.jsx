import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@mui/material';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            as={TextField}
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Field
            as={TextField}
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Field
            as={TextField}
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;