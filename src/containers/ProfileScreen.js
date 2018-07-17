import React, { Component } from 'react';
import axios from '../axios';

import SimpleNavbar from '../components/SimpleNavBar';
import ProfileTab from '../components/ProfileTab';
import MainContentList from '../components/MainContentList';

class ProfileScreen extends Component {
    state = {

    }

    componentWillMount() {
        console.log(this.props.match.params.userId);
        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then(response => {
                console.log(response.data)
                // save list of this user's lists to localStorage
                this.setState({
                    username: response.data.username,
                    email: response.data.email,
                    saves: response.data.saves,
                    upvotes: response.data.upvotes,
                    downvotes: response.data.downvotes,
                    websiteList:  response.data.upvotes // first time load is upvotes
                })
            })
            .catch(err => console.log(err));
    }

    _onButtonActive = (buttonId) => {
        switch (buttonId) {
            case "upvotesBtn": {
                this.setState({websiteList: this.state.upvotes});
                break;
            }
            case "downvotesBtn": {
                this.setState({websiteList: this.state.downvotes});
                break;
            }
            case "sharesBtn": {
                this.setState({websiteList: this.state.shares});
                break;
            }
            case "savesBtn": {
                this.setState({websiteList: this.state.saves});
                break;
            }
            default: this.setState({websiteList: this.state.upvotes});

        }
    }

    render() {

        return (
            <div className="main-screen">
                <SimpleNavbar />
                <div className="profile-screen-content container">
                    <div className="row">
                        <div className="col-4">
                            <ProfileTab
                                {...this.state}
                                onButtonActive={this._onButtonActive}
                            />
                        </div>
                        <div className="col-8">
                            <MainContentList 
                                websiteList={this.state.websiteList}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileScreen;