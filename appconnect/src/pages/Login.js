import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Link, Redirect } from 'react-router-dom';

import fakeAuth from '../Router/fakeAuth';

class Login extends Component {
  state = {
    redirectToReferrer: false,
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };

  render() {
    const { from } = this.props.location || { from: { pathname: '/home' } };
    console.log(this.props.location);
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }
    return (
      <Grid container direction='column' justify='center' alignItems='center'>
        <Typography variant='h3'> Login </Typography>
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
        <Button
          color='primary'
          variant='outlined'
          type='submit'
          className='button-login'
          onClick={this.login}
        >
          Login
        </Button>
        <br />
        <small>
          You dont 't have an account ? sign up
          <Link to=' / signup '>here</Link>
        </small>
      </Grid>
    );
  }
}

export default Login;
