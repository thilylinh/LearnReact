import React, { useState, useEffect, useContext } from 'react';
import { Button, Grid, TextField, styled, Paper } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { LoginContext } from '../../shared/context/LoginContext';

const UpdatePlace = (props) => {
  const auth = useContext(LoginContext);
  const placeId = useParams().placeId;
  const history = useHistory();

  const [places, setPlace] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //onchange input text
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  //get place should update
  useEffect(() => {
    try {
      loadData();
    } catch (err) {
      alert('error', err);
    }
  });

  const loadData = async () => {
    const res = await fetch(`http://localhost:3001/api/places/${placeId}`);
    const data = await res.json();
    setPlace(data.place);
  };

  //console.log('dadadaa', places);

  //method update
  const placeUpdateHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await fetch(`http://localhost:3001/api/places/${placeId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      console.log('tiit', title);
      history.push('/' + auth.userId + '/places');
    } catch (err) {
      alert('error update');
    }
  };
  return (
    <Container>
      <Content>
        <Grid container justify='center' direction='column'>
          <Input
            variant='outlined'
            label='Title'
            // value={place.title}
            onChange={onChangeTitle}
          ></Input>
          <Input
            variant='outlined'
            label='Description'
            multiline
            //value={place.description}
            onChange={onChangeDescription}
          ></Input>
        </Grid>
        <ButtonUpdate color='primary' onClick={placeUpdateHandler}>
          Update
        </ButtonUpdate>
      </Content>
    </Container>
  );
};

export default UpdatePlace;

const Container = styled(Grid)({
  width: '50rem',
  margin: '0 auto',
  marginTop: '2rem',
});

const Content = styled(Paper)({
  padding: '1rem',
  background: '#FAB9F3',
  margin: '0 auto',
});
const ButtonUpdate = styled(Button)({
  marginTop: '1.5rem',
  width: '2rem',
  background: '#00FF38',
  color: 'white',
  margin: '0 auto',
  textAlign: 'center',
});

const Input = styled(TextField)({
  marginTop: '1rem',
  padding: '0.5rem',
});
