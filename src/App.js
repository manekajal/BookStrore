import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
}from "react-router-dom";

import Home from './component/AddressHome';
import AddAddress from './component/AddAddress';

function App() {
  return (
    <div className="App">
          <Router>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/addform">
                <AddAddress />
              </Route>
              <Route exact path="/addform/:id">
                <AddAddress />
              </Route>
              <Route exact path="">
                <Redirect exact from="/" to="/home" />
              </Route>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
