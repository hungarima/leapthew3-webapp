import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    Button
} from 'reactstrap';
import LoginModal from './LoginModal';

class ProfilePanel extends Component {
    state = {}

    render() {
        const display = this.props.username
            ? (
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        {this.props.username}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Profile
                        </DropdownItem>
                        <DropdownItem>
                            {/* TODO: Signout  */}
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
                />
                {display}
            </div>
        );
    }
}

export default ProfilePanel;