import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
//style
import { styled } from '@material-ui/core/styles';

class Post extends Component {
  render() {
    return (
      <Contaier elevation={3}>
        <Grid container direction='row'>
          <TextInput
            id='outlined-multiline-static'
            label='Today, what do you think?'
            multiline
            rows={1}
          />
          <PostButton
            variant='contained'
            color='primary'
            endIcon={<SendIcon />}
          >
            Post
          </PostButton>
        </Grid>
      </Contaier>
    );
  }
}

export default Post;

const Contaier = styled(Paper)({
  padding: '2rem',
  marginBottom: '1rem',
});

const TextInput = styled(TextField)({
  marginLeft: '10px',
  width: '90%',
});

const PostButton = styled(Button)({
  width: '8%',
  marginLeft: '6px',
  height: 'auto',
});
