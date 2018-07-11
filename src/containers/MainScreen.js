import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import FrameContent from '../components/FrameContent';
import axios from "../axios";
import _ from 'lodash';

class MainScreen extends Component {
  state = {
    urlList: []
  }

  componentDidMount() {
    // before render the 1st time
    axios
      .get("/api/url")
      .then(data => {
        // shuffle the list
        this.setState({
          urlList: _.shuffle(data.data),
        });
        // set currentUrl
        if(this.state.urlList.length > 0 ){
          this.setState({
            currentUrl: this.state.urlList[0].url,
            currentId: this.state.urlList[0]._id
          });
        }
      })
      .catch(err => console.log(err))
  }

  displayFrameContent = () => {
    return this.state.currentUrl ? <FrameContent url={this.state.currentUrl} /> : '';
  }

  render() {
    
    return (
      <div className="main-screen">
        <NavBar />
        {this.displayFrameContent()}
      </div>
    );
  }

  _getUrlFromList(index, urlList) {
    let length = urlList.length;
    if (index > length) {
      // if index is bigger than size of list, return last index of list
      return urlList[length - 1];
    } else {
      return urlList[index];
    }
  }
}

export default MainScreen;