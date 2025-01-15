import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RestrictedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
