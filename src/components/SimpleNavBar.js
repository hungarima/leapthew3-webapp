import React, { Component } from 'react';
import axios from "../axios";
import {
    Navbar,
    Button,
    NavLink
} from 'reactstrap';
import ProfilePanel from './ProfilePanel';

class SimpleNavbar extends Component {

    state = {
        loginModalOpen: false,
        errorMessage: ''
    }

    componentWillMount = () => {
        axios.get("/api/auth").then(response => this.setState({
            username: response.data.username,
            id: response.data.id
        }))
    }

    _onRegister = (username, email, password) => {
        axios
            .post("/api/users", {
                username: username,
                email: email,
                password: password,
            })
            .then(response => {
                this.setState({ successMessage: "Registered!" });
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
            .catch(error => {
                console.log(error.response);
                this.setState({ errorMessage: error.response.data.errMsg });
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
                <Navbar className="simple-navbar" dark expand="md">

                    <NavLink href={`/`}>
                        <Button className="home-button">HOME</Button>
                    </NavLink>

                    <ProfilePanel
                        username={this.state.username}
                        onLogin={this._onLogin}
                        onRegister={this._onRegister}
                        onLogout={this._onLogout}
                        isLoginModalOpen={this.state.loginModalOpen}
                        toggleLoginModal={this._toggleLoginModal}
                        errorMessage={this.state.errorMessage}
                        successMessage={this.state.successMessage}
                    />
                </Navbar>
            </div>

        );
    }
}

export default SimpleNavbar;