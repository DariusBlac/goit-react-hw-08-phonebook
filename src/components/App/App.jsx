import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { NotFound } from 'components/NotFound/NotFound';
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import PublicRoute from 'guards/PublicRoute/PublicRoute';
import { Home } from 'pages/Home/Home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authSelector } from 'store/auth/selectors';
import { refreshThunk } from 'store/auth/thunk';
import { lazy } from 'react';
import { getAllThunk } from 'store/contacts/thunk';

const SignIn = lazy(() => import('../../pages/Login/Login'));
const SignUp = lazy(() => import('../../pages/Register/Register'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelector);

  useEffect(() => {
    if (!token) return;
    dispatch(refreshThunk());
    dispatch(getAllThunk());
  }, [dispatch, token]);

  return (
    <>
      <Loader />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
