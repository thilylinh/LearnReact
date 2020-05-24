import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './Router/PrivateRoute';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <PrivateRoute exact path='/home'>
                <Home />
              </PrivateRoute>{' '}
              <PrivateRoute exact path='/profile'>
                <Profile />
              </PrivateRoute>{' '}
              <Route exact path='/login'>
                <Login />
              </Route>{' '}
              <Route exact path='/signup'>
                <Signup />
              </Route>{' '}
            </Switch>{' '}
          </div>{' '}
        </Router>{' '}
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter,
// } from 'react-router-dom';

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   },
// };

// const Public = () => <h3>Public</h3>;
// const Protected = () => <h3>Protected</h3>;

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false,
//   };
//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true,
//       }));
//     });
//   };
//   render() {
//     const { from } = this.props.location.state || { from: { pathname: '/' } };
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer === true) {
//       return <Redirect to={from} />;
//     }

//     return (
//       <div>
//         <p>You must log in to view the page</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       fakeAuth.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/login',
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
// );

// const AuthButton = withRouter(({ history }) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{' '}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push('/'));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// );

// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to='/public'>Public Page</Link>
//           </li>
//           <li>
//             <Link to='/protected'>Protected Page</Link>
//           </li>
//         </ul>
//         <Route path='/public' component={Public} />
//         <Route path='/login' component={Login} />
//         <PrivateRoute path='/protected' component={Protected} />
//       </div>
//     </Router>
//   );
// }
