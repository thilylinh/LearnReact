import React, { Component } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  styled,
} from '@material-ui/core';

class NewPlace extends Component {
  render() {
    return (
      <Container>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          alignContent='center'
        >
          <Title>Add new place</Title>
          <InputText label='Title' variant='outlined' />
          <InputText label='Address' variant='outlined' />
          <InputText
            label='Description'
            multiline
            rowsMax={10}
            variant='outlined'
          />
          <ButtonAdd>Add</ButtonAdd>
        </Grid>
      </Container>
    );
  }
}

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
