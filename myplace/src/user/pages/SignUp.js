import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  styled,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        alignContent='center'
      >
        <Title>Register an account</Title>
        <InputText label='Your name' variant='outlined' />
        <InputText label='Email' variant='outlined' type='email' />
        <InputText label='Password' variant='outlined' type='password' />
        <ButtonAdd>Sign up</ButtonAdd>
        <TitleSignup>
          You have an accoount? Login
          <LinkToSignup to='/login'> now</LinkToSignup>?
        </TitleSignup>
      </Grid>
    </Container>
  );
};

export default SignUp;

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
