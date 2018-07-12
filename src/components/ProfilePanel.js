import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import LoginModal from './LoginModal';
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
                    <DropdownToggle nav caret>
                        {this.props.username}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <NavLink href={`${config.rootPath}/api/users/5b40bdc870217628046ed32b`} >Profile</NavLink>
                        </DropdownItem>
                        <DropdownItem onClick={this.handleSignoutClicked}>
                            Sign out
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            )
            : (
                <NavItem>
                    <Button onClick={this.props.toggleLoginModal}>LOGIN</Button>
                </NavItem>
            )


        return (
            <div>
                <LoginModal
                    onLogin={this.props.onLogin}
                    isLoginModalOpen = {this.props.isLoginModalOpen}
                    toggleLoginModal={this.props.toggleLoginModal}
                    errorMessage={this.props.errorMessage}
                />
                {display}
            </div>
        );
    }
}

export default ProfilePanel;