import React, { useContext } from 'react';
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

  const handleLogin = (e) => {
    e.preventDefault();
    login.login();
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
        <Title>Welcome back</Title>
        <InputText label='Email' variant='outlined' type='email' />
        <InputText label='Password' variant='outlined' type='password' />
        <ButtonAdd onClick={handleLogin}>Login</ButtonAdd>
        <TitleSignup>
          Are you have an account? Create an account
          <LinkToSignup to='/signup'> here</LinkToSignup>?
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
