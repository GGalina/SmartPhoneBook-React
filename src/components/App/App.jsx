import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'Redux/Auth/authOperations';
import { selectorIsRefreshing } from 'Redux/Auth/authSelectors';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { Loader } from '../Loader/Loader';
import { Navigation } from '../Navigation/Navigation';

const Home = lazy(() => import('../Home/Home'));
const Register = lazy(() => import('../Register/Register'));
const Login = lazy(() => import('../Login/Login'));
const Phonebook = lazy(() => import('../Phonebook/Phonebook'));

export const App = () => {
  const isRefreshing = useSelector(selectorIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Phonebook />} />
              }
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};