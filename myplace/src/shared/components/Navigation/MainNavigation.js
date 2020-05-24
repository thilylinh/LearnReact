import React, { useContext } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PlaceIcon from '@material-ui/icons/Place';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const login = useContext(LoginContext);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <PlaceIcon
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria
            label='menu'
          >
            <MenuIcon />
          </PlaceIcon>
          <Typography variant='h6' className={classes.title}>
            Place
          </Typography>
          <NavLinks exact to='/'>
            All User
          </NavLinks>
          {login.isLogin && <NavLinks to='/1/places'> My Place </NavLinks>}
          {login.isLogin && <NavLinks to='/place/new'> Add Place </NavLinks>}
          {!login.isLogin && <NavLinks to='/login'> Login </NavLinks>}
          {login.isLogin && (
            <ButtonLogout onClick={login.logout}> Log out </ButtonLogout>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const NavLinks = styled(NavLink)({
  textDecoration: 'none',
  marginRight: '1rem',
  color: 'white',
  '&:hover': {
    opacity: '0.9',
    color: 'red',
    background: 'yellow',
    padding: '2px 5px',
  },
});

const ButtonLogout = styled(Button)({
  color: 'yellow',
  border: '1px solid white',
  '&:hover': {
    color: 'white',
    background: 'black',
  },
});
