import React, { useState, useContext } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  styled,
} from '@material-ui/core';
import { LoginContext } from '../../shared/context/LoginContext';
import { useHistory } from 'react-router-dom';

const NewPlace = () => {
  const auth = useContext(LoginContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const history = useHistory();

  const onAddPlace = async (event) => {
    event.preventDefault();
    try {
      const data = await fetch('http://localhost:3001/api/places', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          address,
          creator: auth.userId,
        }),
      });
      const resData = await data.json();
      console.log('resdata', resData);
      console.log('title', title);
      history.push('/');
    } catch (err) {
      alert('Something wrong add new place!', err);
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
        <Title> Add new place </Title>
        <InputText label='Title' variant='outlined' onChange={onChangeTitle} />
        <InputText
          label='Address'
          variant='outlined'
          onChange={onChangeAddress}
        />
        <InputText
          label='Description'
          multiline
          rowsMax={10}
          variant='outlined'
          onChange={onChangeDescription}
        />
        <ButtonAdd
          onClick={onAddPlace}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              onAddPlace();
            }
          }}
        >
          Add
        </ButtonAdd>
      </Grid>
    </Container>
  );
};

export default NewPlace;

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
