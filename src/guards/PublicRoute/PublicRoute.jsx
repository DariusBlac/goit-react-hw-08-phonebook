import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { loginSelector } from 'store/auth/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(loginSelector);
  const location = useLocation();
  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
