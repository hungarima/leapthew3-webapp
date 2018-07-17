import React, { Component } from 'react';

import {
    NavLink,
    Button
} from 'reactstrap';

class ProfileTab extends Component {
    state={}

    handleButtonClick = (event) => {
        console.log(event.target.id);
        this.props.onButtonActive(event.target.id);
    }

    render() {
        return (
            <div className="profile-tab text-center">
                <img src="/assets/images/user.png" alt="user-ava" />
                <h5>{this.props.username ? this.props.username : ''}</h5>
                <p>{this.props.email ? this.props.email : ''}</p>
                <div className="button-group">
                    <NavLink >
                        <Button id="upvotesBtn" onClick={this.handleButtonClick}>upvotes</Button>
                    </NavLink>
                    <NavLink >
                        <Button id="downvotesBtn" onClick={this.handleButtonClick}>downvotes</Button>
                    </NavLink>
                    <NavLink >
                        <Button id="sharesBtn" onClick={this.handleButtonClick}>shares</Button>
                    </NavLink>
                    <NavLink >
                        <Button id="savesBtn" onClick={this.handleButtonClick}>saves</Button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default ProfileTab;