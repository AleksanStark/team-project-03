import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { routes } from '../routes/routes';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import PublicRegisterRoute from './PublicRegisterRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute
                  redirectTo={routes.HOMEPAGE}
                  component={WelcomePage}
                />
              }
            />
            <Route
              path={routes.REGISTER}
              element={
                <PublicRegisterRoute
                  redirectTo={routes.LOGIN}
                  component={SignUpPage}
                />
              }
            />
            <Route
              path={routes.LOGIN}
              element={
                <PublicRoute
                  redirectTo={routes.HOMEPAGE}
                  component={SignInPage}
                />
              }
            />
            <Route
              path={routes.HOMEPAGE}
              element={
                <PrivateRoute redirectTo={routes.LOGIN} component={HomePage} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />{' '}
            {/* Catch-all route */}
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
