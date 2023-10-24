import Navigation from 'components/Navigation/Navigation';
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import PublicRoute from 'guards/PublicRoute/PublicRoute';
import { Contacts } from 'pages/Contacts/Contacts';
import { Home } from 'pages/Home/Home';
import SignIn from 'pages/Login/Login';
import SignUp from 'pages/Register/Register';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
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
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
