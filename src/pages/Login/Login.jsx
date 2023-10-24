import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'store/auth/thunk';

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = body => {
    dispatch(loginThunk(body));
  };

  return <LoginForm disp={handleSubmit} />;
}
