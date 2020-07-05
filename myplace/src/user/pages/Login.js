import React, { useContext, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  styled,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../shared/context/LoginContext';

const Login = () => {
  const login = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch('http://localhost:3001/api/users/login', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseData = await data.json();
      if (data.ok) {
        login.login(responseData.user.id);
      } else {
        alert('Login fail');
      }

      console.log('fafafafa', responseData);
    } catch (err) {
      alert('err');
    }
  };
  return (
    <Container>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        alignContent='center'
      >
        <Title> Welcome back </Title>
        <InputText
          label='Email'
          variant='outlined'
          type='email'
          onChange={inputEmail}
        />
        <InputText
          label='Password'
          variant='outlined'
          type='password'
          onChange={inputPassword}
        />
        <ButtonAdd
          onClick={handleLogin}
          // onKeyPress={(event) => {
          //   if (event.key === 'Enter') {
          //     //handleLogin();
          //     alert('dăng nhap');
          //   }
          // }}
        >
          Login
        </ButtonAdd>
        <TitleSignup>
          Are you have an account ? Create an account
          <LinkToSignup to='/signup'> here </LinkToSignup>?
        </TitleSignup>
      </Grid>
    </Container>
  );
};

export default Login;

const Container = styled(Paper)({
  marginTop: '2rem',
  width: '50rem',
  margin: '0 auto',
});
const Title = styled(Typography)({
  background: '#FD10BA',
  width: '48rem',
  padding: '1rem',
  color: 'white',
  fontSize: '1.5rem',
});

const InputText = styled(TextField)({
  width: '30rem',
  marginTop: '1rem',
});

const ButtonAdd = styled(Button)({
  marginTop: '1rem',
  marginBottom: '1rem',
  background: '#33EB23',
  color: 'white',
  '&:hover': {
    background: '#33EB23',
    color: 'white',
  },
});

const TitleSignup = styled(Typography)({
  marginBottom: '1rem',
});

const LinkToSignup = styled(Link)({
  textDecoration: 'none',
  color: '#FC3C30',
});
