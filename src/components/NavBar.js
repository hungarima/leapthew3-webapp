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
import Share from './Share';

class NavBar extends Component {

    componentWillMount = () => {
        axios.get("/api/auth").then(response => this.setState({
            username: response.data.username,
            id: response.data.id
        }))

        
    }



    componentWillReceiveProps(nextProps) {
        this.setState({vote:null})
        // will get called before every time this component re-render
        axios
            .get(`api/url/${nextProps.currentUrlId}/data`)
            .then(response => {
                this.setState({ vote: response.data.vote });
                console.log(this.state.vote)
            })
            .catch(err => {
                console.log(err);
            })
    }

    state = {
        loginModalOpen: false,
        vote: null
    }


    upvote = () => {
        axios.post(`/api/url/${this.props.currentUrlId}/upvote`)
            .then(response => {
                console.log(response);

            })
            .catch(error => console.log(error));
    }

    downvote = () => {
        axios.delete(`/api/url/${this.props.currentUrlId}/downvote`)
            .then(response => {
                console.log(response);

            })
            .catch(error => console.log(error));
    }

    _onRegister = (username, email, password) => {
        axios
            .post("/api/users", {
                username: username,
                email: email,
                password: password,
            })
            .then(response => {
                this.setState({ successMessage: "Registered!"});
                // this._toggleLoginModal();

            })
            .catch(err => console.log(err));
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
                console.log(err);
                // this.setState({ errorMessage: err });
            });
    }

    _onLogout = () => {
        axios
            .delete("/api/auth")
            .then(response => {
                console.log(response.data);
                this.setState({ username: '', id: '' })
            }) // handle headers
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
                                    <Button id="upvote" onClick={this.upvote} ><img src="/assets/images/like.png" alt="upvote" /></Button>
                                </NavLink>
                                <NavbarBrand className="navbar-brand" >
                                    
                                        <Button className="leap-button" onClick={this.props.onLeap.bind(this)}>LEAP</Button>
                                    
                                </NavbarBrand>
                                <NavLink >
                                    <Button id="downvote" onClick={this.downvote}><img src="/assets/images/dislike.png" alt="downvote" /></Button>
                                </NavLink>
                            </div>
                        </div>

                        <div className="navbar-flex-item--end">
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={false} navbar>
                                <Nav className="ml-auto" navbar >
                                    <NavItem>
                                        <NavLink href="#">
                                            <Share />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">SAVE FOR LATER</NavLink>
                                    </NavItem>
                                    <ProfilePanel
                                        username={this.state.username}
                                        onLogin={this._onLogin}
                                        onRegister = {this._onRegister}
                                        onLogout={this._onLogout}
                                        isLoginModalOpen={this.state.loginModalOpen}
                                        toggleLoginModal={this._toggleLoginModal}
                                        errorMessage={this.state.errorMessage}
                                        successMessage= {this.state.successMessage}
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