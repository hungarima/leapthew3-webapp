import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

class Register extends Component {

    state = {
        username: "",
        email: "",
        password: "",
    };

    _register = () => {
        console.log(this.state);
        this
            .props
            .onRegister(this.state.username, this.state.email, this.state.password);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="registerUsername">Username</Label>
                    <Input
                        id="registerUsername"
                        type="text"
                        name="username"
                        onChange={(event) => this.setState({username: event.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for="registerEmail">Email</Label>
                    <Input
                        id="registerEmail"
                        type="email"
                        name="email"
                        onChange={(event) => this.setState({email: event.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for="registerPassword">Password</Label>
                    <Input
                        id="registerPassword"
                        type="password"
                        name="password"
                        onChange={(event) => this.setState({password: event.target.value})}/>
                </FormGroup>
                {/* <FormGroup controlId="confirmPassword">
                    <Label for="inputConfirmPassword">Confirm Password</Label>
                    <Input
                        id="inputConFirmPassword"
                        type="confirmPassword"
                        name="confirmPassword"
                        onChange={(event) => this.setState({password: event.target.value})}/>
                </FormGroup> */}
                <Button onClick={this._register}>Register</Button>
            </Form>
        );
    }
}

export default Register;