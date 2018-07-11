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
    // axios
    //   .get("/api/url")
    //   .then(data => {
    //     // shuffle the list
    //     this.setState({
    //       urlList: _.shuffle(data.data),
    //     });
    //     // set currentUrl
    //     if (this.state.urlList.length > 0) {
    //       this.setState({

    //       });
    //     }
    //   })
    //   .catch(err => console.log(err))

    Promise.all([
      axios.get('api/url'),
      axios.get('/api/url/currentUrlId')
    ]).then( (results) => {
      // results = array of all response results
      let urlList = _.shuffle(results[0].data);
      // currentUrl
      const currentUrlId = results[1].data ? results[1].data : urlList[0]._id;
      
      this.setState({
        urlList: urlList,
        currentUrlId: currentUrlId,
        currentUrlIndex : this.getIndexById(urlList, currentUrlId)
      });
      
      
      
    }).catch(err => console.log(err));
    

  }

  displayFrameContent = () => {
    return this.state.currentUrlId ? <FrameContent currentUrlId={this.state.currentUrlId} /> : '';
  }

  render() {

    return (
      <div className="main-screen">
        <NavBar />
        {this.displayFrameContent()}
      </div>
    );
  }

  getIndexById(array, id) {
    if(id) {
      return _.findIndex(array, ['_id', id]);
    } else return 0;
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