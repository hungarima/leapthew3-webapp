import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink,
    Button
} from 'reactstrap';
import UserModal from './UserModal';
import config from '../config';


class ProfilePanel extends Component {
    state = {}

    handleSignoutClicked = (event) => {
        this.props.onLogout();
    }

    render() {
        const display = this.props.username
            ? (
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle color="link">
                        <img src="/assets/images/user.png" />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <NavLink href={`${config.rootPath}/5b40bdc870217628046ed32b/profile`} >Profile</NavLink>
                        </DropdownItem>
                        <DropdownItem onClick={this.handleSignoutClicked}>
                            Sign out
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            )
            : (
                <NavLink href="#" onClick={this.props.toggleLoginModal}>SIGN IN</NavLink>
            )


        return (
            <div className="profile-panel">
                <UserModal
                    onLogin={this.props.onLogin}
                    onRegister={this.props.onRegister}
                    isLoginModalOpen={this.props.isLoginModalOpen}
                    toggleLoginModal={this.props.toggleLoginModal}
                    errorMessage={this.props.errorMessage}
                    successMessage={this.props.successMessage}
                />
                {display}   
            </div>
        );
    }
}

export default ProfilePanel;