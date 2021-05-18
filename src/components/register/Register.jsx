import { useState } from 'react';
import Login from './Login';
import Signin from './Signin';

export default function Register() {
  const [login, setLogin] = useState(true);
  const select = () => {
    setLogin(!login);
  };
  return (
    <div>{login ? <Login select={select} /> : <Signin select={select} />}</div>
  );
}
