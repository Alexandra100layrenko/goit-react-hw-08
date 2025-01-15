import { AppBar, Toolbar, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppBarComponent = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar>
      <nav style={{ width: '100%' }}>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
              width: '100%',
            }}
          >
            <li style={{ flexGrow: 1 }}>
              <Link to="/">
                <Button color="inherit">Home</Button>
              </Link>
            </li>

            <div style={{ display: 'flex', gap: '10px' }}>
              {!isLoggedIn && (
                <>
                  <li>
                    <Link to="/register">
                      <Button color="inherit">Register</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <Button color="inherit">Login</Button>
                    </Link>
                  </li>
                </>
              )}

              {isLoggedIn && (
                <>
                  <li>
                    <Link to="/contacts">
                      <Button color="inherit">Contacts</Button>
                    </Link>
                  </li>
                  <li>
                    <Button color="inherit" onClick={() => dispatch(logout())}>
                      Logout
                    </Button>
                  </li>
                </>
              )}
            </div>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
