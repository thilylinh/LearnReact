import React, { useCallback, useState } from 'react';
import './App.css';
//import page
import User from './user/pages/User';
import NewPlace from './place/pages/NewPlace';
import MainNavigtion from './shared/components/Navigation/MainNavigation';
//import router
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import UserPlace from './place/pages/UserPlace';
import Login from './user/pages/Login';
import SignUp from './user/pages/SignUp';
import { LoginContext } from './shared/context/LoginContext';
import UpdatePlace from './place/pages/UpdatePlace';

const App = () => {
  const [isLogin, setLogin] = useState(false);
  const [userID, setUserId] = useState();

  const login = useCallback((uid) => {
    setLogin(true);
    setUserId(uid);
  }, []);
  const logout = useCallback(() => {
    setLogin(false);
    setUserId(null);
  }, []);

  let routes;
  if (isLogin) {
    routes = (
      <Switch>
        <Route exact path='/'>
          <User />
        </Route>
        <Route exact path='/:userId/places'>
          <UserPlace />
        </Route>
        <Route exact path='/place/new'>
          <NewPlace />
        </Route>
        <Route exact path='/places/:placeId'>
          <UpdatePlace />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path='/'>
          <User />
        </Route>
        <Route exact path='/:userId/places'>
          <UserPlace />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Redirect to='/login' />
      </Switch>
    );
  }
  return (
    <LoginContext.Provider
      value={{ isLogin: isLogin, userId: userID, login: login, logout: logout }}
    >
      <Router>
        <MainNavigtion /> {routes}
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
