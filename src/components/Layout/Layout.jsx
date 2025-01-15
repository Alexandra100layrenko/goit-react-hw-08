import { Container, Button } from '@mui/material';
import AppBarComponent from '../AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <AppBarComponent />

      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Layout;