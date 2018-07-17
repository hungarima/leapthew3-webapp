import React, {Component} from 'react';

import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    _login = () => {
        // console.log(this.state);
        this
            .props
            .onLogin(this.state.username, this.state.password);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="loginUsername">Username</Label>
                    <Input
                        id="loginUsername"
                        type="text"
                        name="username"
                        onChange={(event) => this.setState({username: event.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for="loginPassword">Password</Label>
                    <Input
                        id="loginPassword"
                        type="password"
                        name="password"
                        onChange={(event) => this.setState({password: event.target.value})}/>
                </FormGroup>
                <Button onClick={this._login}>Login</Button>
            </Form>
        );
    }
}

export default Login;