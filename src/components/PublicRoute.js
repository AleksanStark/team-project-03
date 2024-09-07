import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}