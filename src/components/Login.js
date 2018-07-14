import React, {Component} from 'react';

import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    _login = () => {
        console.log(this.state);
        this
            .props
            .onLogin(this.state.username, this.state.password);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="inputUsername">Username</Label>
                    <Input
                        id="inputUsername"
                        type="text"
                        name="username"
                        onChange={(event) => this.setState({username: event.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for="inputPassword">Password</Label>
                    <Input
                        id="inputPassword"
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