import { useState } from 'react';
import Login from './Login';
import Signin from './Signin';

export default function Register() {
  const [login, setLogin] = useState(true);
  return <div>{login ? <Login /> : <Signin />}</div>;
}
