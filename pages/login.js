import { useEffect } from 'react';
import { useUser } from '../context/user';

const Login = () => {
  const { login } = useUser();
  useEffect(login, []);
  return <p>Login</p>;
};

export default Login;
