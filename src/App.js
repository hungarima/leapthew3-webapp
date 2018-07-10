import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainScreen from './containers/MainScreen';
import axios from "./axios";


class App extends Component {
  componentDidMount() {
    axios
      .get("/api/url")
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <MainScreen />
      </div>
    );
  }
}

export default App;
