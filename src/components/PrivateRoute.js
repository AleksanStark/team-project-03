import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}