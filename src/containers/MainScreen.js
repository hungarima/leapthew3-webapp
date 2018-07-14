import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import FrameContent from '../components/FrameContent';
import axios from "../axios";
import _ from 'lodash';

import { Link } from 'react-router-dom';

class MainScreen extends Component {
  state = {
    urlList: []
  }

  componentDidMount() {
    
    // window.addEventListener("hashchange", this.detectBackOrForward(
    //   function () { console.log("back") },
    //   function () { console.log("forward") }
    // ));

    // before render the 1st time
    axios
      .get("/api/url")
      .then(data => {
        // shuffle the list
        let urlList = _.shuffle(data.data);
        const currentUrlId = localStorage.currentUrlId ? localStorage.currentUrlId : urlList[0]._id;
        localStorage.setItem("currentUrlId", currentUrlId);
        this.setState({
          urlList: urlList,
          currentUrlId: localStorage.getItem('currentUrlId'),
          currentUrlIndex: this.getIndexById(urlList, currentUrlId)
        });
        // set currentUrl
        // if (this.state.urlList.length > 0) {
        //   this.setState({

        //   });
        // }
      })
      .catch(err => console.log(err))

    // Promise.all([
    //   axios.get('api/url'),
    //   axios.get('/api/url/currentUrlId')
    // ]).then((results) => {
    //   // results = array of all response results
    //   let urlList = _.shuffle(results[0].data);
    //   // currentUrl to localStorage
    //   const currentUrlId = results[1].data ? results[1].data : urlList[0]._id;
    //   localStorage.setItem("currentUrlId", currentUrlId);

    //   this.setState({
    //     urlList: urlList,
    //     currentUrlId: localStorage.getItem('currentUrlId'),
    //     currentUrlIndex: this.getIndexById(urlList, currentUrlId)
    //   });
    // }).catch(err => console.log(err));

    // if (typeof (Storage) !== "undefined") {
    //   // Code for localStorage/sessionStorage.
    //   console.log("LS Here");
    // } else {
    //  console.log("LS undefined");
    // }   // Sorry! No Web Storage support..

  }

  // detectBackOrForward = function (onBack, onForward) {
  //   let hashHistory = [window.location.hash];
  //   let historyLength = window.history.length;
    
  //   return function () {
  //     var hash = window.location.hash, length = window.history.length;
  //     if (hashHistory.length && historyLength === length) {
  //       if (hashHistory[hashHistory.length - 2] === hash) {
  //         hashHistory = hashHistory.slice(0, -1);
  //         onBack();
  //       } else {
  //         hashHistory.push(hash);
  //         onForward();
  //       }
  //     } else {
  //       hashHistory.push(hash);
  //       historyLength = length;
  //     }
  //   }
  // };

  displayFrameContent = () => {
    return this.state.currentUrlId
      ? <Link to={`api/url/${this.state.currentUrlId}`} ><FrameContent currentUrlId={this.state.currentUrlId} /> </Link>
      : '';
  }

  render() {

    return (
      <div className="main-screen">
        <NavBar currentUrlId={this.state.currentUrlId} onLeap={this._onLeap} />
        {this.displayFrameContent()}
      </div>
    );
  }

  getIndexById(array, id) {
    if (id) {
      return _.findIndex(array, ['_id', id]);
    } else return 0;
  }

  _onLeap = () => {
    // change currenUrlId and currentUrlIndex
    let length = this.state.urlList.length - 1;
    if (this.state.currentUrlIndex >= length) {
      // if index is bigger than size of list, shuffle the urlList
      // and redirect to first index of urlList
      let urlList = _.shuffle(this.state.urlList);
      localStorage.currentUrlId = urlList[0]._id;
      this.setState({
        urlList: urlList,
        currentUrlIndex: 0,
        currentUrlId: localStorage.getItem("currentUrlId")
      });


    } else {
      let index = this.state.currentUrlIndex + 1;
      localStorage.currentUrlId = this.state.urlList[index]._id;
      this.setState({
        currentUrlIndex: index,
        currentUrlId: localStorage.getItem("currentUrlId")
      });

    }
  }

  // _getUrlFromList(index, urlList) {
  //   let length = urlList.length;
  //   if (index > length) {
  //     // if index is bigger than size of list, return last index of list
  //     return urlList[length - 1];
  //   } else {
  //     return urlList[index];
  //   }
  // }

}

export default MainScreen;