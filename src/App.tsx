import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Default from './Default';
import Success from './Success';
import 'fontsource-roboto'

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path ="/" component = {Default} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/success" component={Success} />
          </Switch>
        </Router>
       
    </>
  );
}

export default App;
