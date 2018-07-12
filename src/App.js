import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import MainScreen from './containers/MainScreen';
import ProfileScreen from './containers/ProfileScreen';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path ="/" component={MainScreen} />
        <Route path ="/api/users/:id" component={ProfileScreen} />
      </Switch>
      </div>
    );
  }

 
}

export default App;
