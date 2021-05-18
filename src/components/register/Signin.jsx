import { useState } from 'react';
import styled from 'styled-components';
import { FormWrapper, Input, Button } from '../lib';
import { GoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../../env-var';
import { useDispatch } from 'react-redux';
import { loginOrSignin } from '../../reducers/actionCreators';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  color: #effeec;
  text-decoration: underline;
  text-underline-offset: 10px;
  padding: 30px;
  /* width: fit-content; */
`;

const NoAccount = styled.button`
  color: #effeec;
  text-decoration: underline;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export default function Signin(props) {
  const { select } = props;
  const [givenName, setgivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const responseGoogle = (res) => {
    console.log(res);
    res.error
      ? console.log(res.error)
      : dispatch(loginOrSignin(res.profileObj));
  };

  const handleChangeInputValue = (setter, e) => {
    setter(e.target.value);
  };

  return (
    <Wrapper>
      <Title>Signin</Title>
      <FormWrapper action=''>
        <Input
          style={{ gridRow: 3 }}
          placeholder='prémon'
          type='text'
          value={givenName}
          onChange={(e) => handleChangeInputValue(setgivenName, e)}
        />
        <Input
          style={{ gridRow: 3 }}
          placeholder='Nom'
          type='text'
          value={familyName}
          onChange={(e) => handleChangeInputValue(setFamilyName, e)}
        />
        <Input
          style={{ gridRow: 4, gridColumn: '1 / 3' }}
          placeholder='my-email@email.com'
          type='text'
          value={email}
          onChange={(e) => handleChangeInputValue(setEmail, e)}
        />
        <Input
          style={{ gridRow: 5, gridColumn: '1 / 3' }}
          placeholder='my awesome password...'
          type='password'
          value={password}
          onChange={(e) => handleChangeInputValue(setPassword, e)}
        />
        <Button style={{ gridRow: 6 }}>valider</Button>
        <GoogleLogin
          render={(renderProps) => (
            <Button
              style={{
                gridRow: 6,
              }}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Créer un compte avec{' '}
              <svg width='18' height='18' xmlns='http://www.w3.org/2000/svg'>
                <g fill='#000' fillRule='evenodd'>
                  <path
                    d='M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z'
                    fill='#EA4335'
                  ></path>
                  <path
                    d='M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z'
                    fill='#4285F4'
                  ></path>
                  <path
                    d='M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z'
                    fill='#FBBC05'
                  ></path>
                  <path
                    d='M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z'
                    fill='#34A853'
                  ></path>
                  <path fill='none' d='M0 0h18v18H0z'></path>
                </g>
              </svg>
            </Button>
          )}
          clientId={CLIENT_ID}
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </FormWrapper>
      <NoAccount onClick={() => select()}>Déja un compte?</NoAccount>
    </Wrapper>
  );
}
