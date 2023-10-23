import Navigation from 'components/Navigation/Navigation';
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
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
