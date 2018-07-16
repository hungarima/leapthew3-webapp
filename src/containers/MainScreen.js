import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import FrameContent from '../components/FrameContent';
import axios from "../axios";
import _ from 'lodash';

class MainScreen extends Component {

  state = {
    urlList: [],
    iframeSrc: null,
  }

  componentDidMount() {
    // before render the 1st time
    this._getUrlList(localStorage.urlListNum || 1);
  }

  displayFrameContent = () => {
    return this.state.currentUrlId
      ? <FrameContent currentUrlId={this.state.currentUrlId} />
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
    this.setState.iframeSrc = null                      // <---- wut dis ??

    let length = this.state.urlList.length - 1;
    if (this.state.currentUrlIndex >= length) {
      // if index is bigger than size of list, call the next UrlList
      this._getUrlList(parseInt(this.state.urlListNum, 10) + 1);
    } else {
      let index = this.state.currentUrlIndex + 1;
      localStorage.currentUrlId = this.state.urlList[index]._id;
      this.setState({
        currentUrlIndex: index,
        currentUrlId: localStorage.getItem("currentUrlId")
      });

    }
  }

  _getUrlList = (urlListNum) => {
    return axios
      .get(`/api/url?page=${urlListNum}`)
      .then(data => {

        if (!data.data.url) {                 // end of urls
          this._getUrlList(1);                // call the first page of urls
          return;
        } else {
          
          // shuffle the list
          let urlList = _.shuffle(data.data.url);
          let currentUrlIndex = this.getIndexById(urlList, localStorage.currentUrlId) !== -1 ? this.getIndexById(urlList, localStorage.currentUrlId) : 0;
          let currentUrlId = urlList[currentUrlIndex]._id;

          localStorage.setItem("currentUrlId", currentUrlId);
          localStorage.setItem("urlListNum", data.data.thisPageNum);
          this.setState({
            urlList: urlList,
            currentUrlId: localStorage.getItem('currentUrlId'),
            urlListNum: localStorage.getItem('urlListNum'),
            currentUrlIndex: currentUrlIndex
          });
        }

      })
      .catch(err => console.log(err))
  }

}

export default MainScreen;