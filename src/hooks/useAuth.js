import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectIsRegistered,
} from '../redux/auth/auth.selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRegistered: useSelector(selectIsRegistered),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};