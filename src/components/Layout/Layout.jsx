import { Container } from '@mui/material';
import AppBarComponent from '../AppBar/AppBar';

const Layout = ({ children }) => (
  <div>
    <AppBarComponent />
    <Container>{children}</Container>
  </div>
);

export default Layout;