import React, { useState, useContext } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  styled,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Login from './Login';
import { LoginContext } from '../../shared/context/LoginContext';
import UploadImage from '../../shared/components/UploadImage/UploadImage';

const SignUp = () => {
  const login = useContext(LoginContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState();
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const inputName = (e) => {
    setName(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSignUp = async (event) => {
    event.preventDefault();
    console.log('imgae', typeof image);
    try {
      const data = await fetch('http://localhost:3001/api/users/signup', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          password,
          image,
        }),
        // formData,
      });
      const responseData = await data.json();
      login.login(responseData.user.id);
      setIsSignUp(true);
    } catch (err) {
      alert('Something wrong to sign up!', err);
    }
  };

  const hanlderInput = (img) => {
    setImage(img);
  };
  if (isSignUp) {
    return <Login />;
  }
  return (
    <Container>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        alignContent='center'
      >
        <Title> Register an account </Title>
        <InputText label='Your name' variant='outlined' onChange={inputName} />
        <UploadImage id='image' onInput={hanlderInput} />
        <InputText
          label='Email'
          variant='outlined'
          type='email'
          onChange={inputEmail}
          name='image'
        />
        <InputText
          label='Password'
          variant='outlined'
          type='password'
          onChange={inputPassword}
        />
        <ButtonAdd
          onClick={onSignUp}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              onSignUp();
            }
          }}
        >
          Sign up
        </ButtonAdd>
        <TitleSignup>
          You have an accoount ? Login
          <LinkToSignup to='/login'> now </LinkToSignup>?
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
