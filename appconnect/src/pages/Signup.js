import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

export class Signup extends Component {
  render() {
    return (
      <Grid container direction='column' justify='center' alignItems='center'>
        <Typography variant='h5'>Sign UP</Typography>
        <TextField
          id='email'
          name='emal'
          type='email'
          label='email'
        ></TextField>

        <TextField
          id='password'
          name='password'
          type='password'
          label='password'
        ></TextField>
        <br></br>
        <Button
          color='primary'
          variant='outlined'
          type='submit'
          className='button-login'
        >
          Sign up
        </Button>
        <small>
          You dont't have an account ? Login <Link to='/login'>here</Link>
        </small>
      </Grid>
    );
  }
}

export default Signup;
