import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link, withRouter } from 'react-router-dom';

import './Navbar.css';
import fakeAuth from '../Router/fakeAuth';

const Navbar = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <AppBar>
      <ToolBar className='nav-container'>
        <Button>
          <Link className='button' to='/home'>
            Home
          </Link>
        </Button>
        <Button>
          <Link className='button' to='/profile'>
            Profile
          </Link>
        </Button>
        <Button
          className='button'
          onClick={() => {
            fakeAuth.signout(() => history.push('/'));
          }}
        >
          <Link to='/'>Sign out</Link>
        </Button>
      </ToolBar>
    </AppBar>
  ) : (
    <AppBar>
      <ToolBar className='nav-container'>
        <Button>
          <Link className='button' to='/login'>
            Login
          </Link>
        </Button>
        <Button>
          <Link className='button' to='/signup'>
            Signup
          </Link>
        </Button>
      </ToolBar>
    </AppBar>
  )
);

export default Navbar;
