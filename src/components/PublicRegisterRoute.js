import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function PublicRegisterRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isRegistered, isLoggedIn } = useAuth();
  return isRegistered ? (
    <Navigate to={redirectTo} />
  ) : isLoggedIn ? (
    <Navigate to="/homepage" />
  ) : (
    <Component />
  );
}