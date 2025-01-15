import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/contacts">
            <Button>Contacts</Button>
          </Link>
          {/* User Menu here */}
        </>
      ) : (
        <>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navigation;