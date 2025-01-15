import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import s from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      setEmail('');
      setPassword('');
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Все поля должны быть заполнены.');
      return;
    }

    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (err) {
      setError('Неверные учетные данные. Пожалуйста, попробуйте снова.');
    }
  };

  return (
    <div className={s.container}>
      <h2>Login</h2>
      {error && <p className={s.error}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className={s.form}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите ваш email"
            required
          />
        </div>

        <div className={s.form}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите ваш пароль"
            required
          />
        </div>

        <button type="submit" className={s.button}>
          Войти
        </button>
      </form>
    </div>
  );
};
