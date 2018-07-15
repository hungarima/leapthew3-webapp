import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import FrameContent from '../components/FrameContent';
import axios from "../axios";
import _ from 'lodash';

class MainScreen extends Component {
  


  componentDidMount() {
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

  displayFrameContent = () => {
    return this.state.currentUrlId
      ? <FrameContent currentUrlId={this.state.currentUrlId} />
      : '';

  }

  state = {
    urlList: [],
    iframeSrc: null,
  }

  render() {

    return (
      <div className="main-screen">
        <NavBar currentUrlId={this.state.currentUrlId} onLeap={this._onLeap}/>
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
    this.setState.iframeSrc=null
    
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

}

export default MainScreen;