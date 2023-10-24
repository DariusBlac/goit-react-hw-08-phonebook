import { useDispatch } from 'react-redux';
import { registrationThunk } from 'store/auth/thunk';
import { RegisterForm } from 'components/Forms/RegisterForm/RegisterForm';

export default function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = body => {
    dispatch(registrationThunk(body));
  };

  return <RegisterForm disp={handleSubmit} />;
}
