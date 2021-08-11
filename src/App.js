import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import Profile from './components/Authentication/Profile';
import PrivateRoute from './components/Authentication/PrivateRoute';
import ForgotPassword from './components/Authentication/ForgotPassword';
import UpdateProfile from './components/Authentication/UpdateProfile';
import Dashboard from './components/google-drive/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <PrivateRoute path='/' component={Dashboard} />
          <PrivateRoute exact path='/user' component={Profile} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
