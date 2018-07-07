import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import FrameContent from '../components/FrameContent';

class MainScreen extends Component {
  render() {
    return (
        <div className="main-screen">
            <NavBar />
            <FrameContent />
        </div>
    );
  }
}

export default MainScreen;