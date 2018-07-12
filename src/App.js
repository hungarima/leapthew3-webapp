import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import MainScreen from './containers/MainScreen';
<<<<<<< HEAD



class App extends Component {

=======

class App extends Component {
  
>>>>>>> c219dd6415281849cbd85f4262fb3805c9c28ece
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path ="/" component={MainScreen} />
      </Switch>
      </div>
    );
  }

 
}

export default App;
