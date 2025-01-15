import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import s from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim() || !name.trim()) {
      setError('All fields must be filled.');
      return;
    }

    dispatch(register({ name, email, password }));
  };

  return (
    <div className={s.registerForm}>
      <h2>Register</h2>
      {error && <p className={s.error}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className={s.form}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className={s.form}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className={s.form}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className={s.button}>Register</button>
      </form>

      <div className={s.nav}>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};