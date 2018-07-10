import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';

class LoginModal extends Component {
    state = {
        username: "",
        password: ""
    }
    render() {
        return (
            <Modal isOpen={this.props.isLoginModalOpen} toggle={this.props.toggleLoginModal}>
                <ModalHeader toggle={this.props.toggleLoginModal} >
                    Login
                </ModalHeader>
                <ModalBody>
                    <h6 style={{color:"red"}}>{this.props.errorMessage ? this.props.errorMessage : ''}</h6>
                    {this.renderModalBody()}
                </ModalBody>
            </Modal>
        );
    }

    renderModalBody = () => {
        return (
            <Form>
                <FormGroup>
                    <Label for="inputUsername">Username</Label>
                    <Input
                        id="inputUsername"
                        type="text"
                        name="username"
                        onChange={(event) => this.setState({ username: event.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="inputPassword">Password</Label>
                    <Input
                        id="inputPassword"
                        type="password"
                        name="password"
                        onChange={(event) => this.setState({ password: event.target.value })} />
                </FormGroup>
                <Button onClick={this._login}>Login</Button>
            </Form>
        )
    }

    _login = () => {
        console.log(this.state);
        this.props.onLogin(this.state.username, this.state.password);
    }

}

export default LoginModal;