import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Share from '../components/Share';

class ProfileScreen extends Component {
    render() {
        return (
            <div className="profile-screen">
                <NavBar />
               <Share />
            </div>
        );
    }
}

export default ProfileScreen;