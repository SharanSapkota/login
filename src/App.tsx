import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Default from './pages/Default';
import Success from './pages/Success';
import Dashboard from './pages/Main';
import SignUpp from './pages/SignUpp';
import 'fontsource-roboto'
import {PrivateRoute} from './components/routes/PrivateRoute'

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path ="/" component = {Default} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/succ" component={SignUpp} />
          <PrivateRoute exact path = '/dashboard' component={Dashboard} />
          </Switch>
        </Router>
       
    </>
  );
}

export default App;
