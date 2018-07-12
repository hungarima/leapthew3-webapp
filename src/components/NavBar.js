import React, { Component } from 'react';
import axios from "../axios";

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    Nav,
    NavLink,
    Button,
} from 'reactstrap';

import ProfilePanel from '../components/ProfilePanel';

class NavBar extends Component {

    componentWillMount = () => {
        axios.get("/api/auth").then(response => this.setState({
            username: response.data.username,
            id: response.data.id
        }))
    }

    state = {
        loginModalOpen: false
    }

    _onLogin = (submittedUsername, submittedPassword) => {
        axios
            .post("/api/auth", {
                username: submittedUsername,
                password: submittedPassword
            })
            .then(response => {
                this.setState({
                    username: response.data.username,
                    id: response.data.id
                })
                this._toggleLoginModal();
            })
            .catch(err => {
                this.setState({ errorMessage: err.response.data.errMsg });
            });
    }

    _onLogout = () => {
        axios
            .delete("/api/auth")
            .then(response => {
                console.log(response.data);
                this.setState({username: '', id: ''})
            } ) // handle headers
            .catch(err => console.log(err));
    }

    _toggleLoginModal = () => {
        this.setState({ loginModalOpen: !this.state.loginModalOpen })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <div className="navbar-flex">
                        <div className="navbar-flex-item">
                            <div className="navbar-button-group">
                                <NavLink>
                                    <img src="/assets/images/like.png" alt="upvote" />
                                </NavLink>
                                <NavbarBrand className="navbar-brand" >
                                    <Button className="leap-button" onClick={this.props.onLeap.bind(this)}>LEAP</Button>
                                </NavbarBrand>
                                <NavLink >
                                    <img src="/assets/images/dislike.png" alt="downvote" />
                                </NavLink>
                            </div>
                        </div>

                        <div className="navbar-flex-item--end">
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={false} navbar>
                                <Nav className="ml-auto" navbar >
                                    <NavItem>
                                        <NavLink href="/">SHARE</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">SAVE FOR LATER</NavLink>
                                    </NavItem>
                                    <ProfilePanel
                                        username={this.state.username}
                                        onLogin={this._onLogin}
                                        onLogout={this._onLogout}
                                        isLoginModalOpen={this.state.loginModalOpen}
                                        toggleLoginModal={this._toggleLoginModal}
                                        errorMessage={this.state.errorMessage}
                                    />
                                </Nav>
                            </Collapse>
                        </div>

                    </div>
                </Navbar>
            </div>
        );
    }

}

export default NavBar;