import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainScreen from './containers/MainScreen';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreen />
      </div>
    );
  }
}

export default App;
