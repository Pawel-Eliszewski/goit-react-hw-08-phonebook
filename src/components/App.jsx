import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
