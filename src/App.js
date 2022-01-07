import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
}from "react-router-dom";

import Homepage from './component/Design/Homepage';
import Home from './component/Design/Home';

function App() {
  return (
    <div className="App">
       
          <Router>
            <Switch>
           
            <Route exact path="/" component={Homepage} />

            <Route exact path="/home" component={Home} />
            
              hii
             
            </Switch>
          </Router>
    </div>
  );
}

export default App;
