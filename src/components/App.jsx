import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from './Routes/RestrictedRoute';
import { Toaster } from 'react-hot-toast';
import Loader from "./Loader/Loader";
import { selectAuth } from '../redux/auth/selectors';
import { refresh } from '../redux/auth/operations';
import css from "./App.module.css";

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = selectAuth;

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
  <Loader />
  ) : (
    <div>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>} />
          } />
          <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<LogInPage/>} />
          } />
          <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage/>} />
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster />
    </div>
  );
};

export default App;