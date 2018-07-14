import React, {Component} from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import classnames from 'classnames';

import Login from './Login';
import Register from './Register';

class UserModal extends Component {

    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({activeTab: tab});
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isLoginModalOpen}
                toggle={this.props.toggleLoginModal}>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({
                            active: this.state.activeTab === '1'
                        })}
                            onClick={() => {
                            this.toggle('1');
                        }}>
                            Login
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                            active: this.state.activeTab === '2'
                        })}
                            onClick={() => {
                            this.toggle('2');
                        }}>
                            Register
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <ModalHeader toggle={this.props.toggleLoginModal}>
                            Login
                        </ModalHeader>
                        <ModalBody>
                            <h6
                                style={{
                                color: "red"
                            }}>{this.props.errorMessage
                                    ? this.props.errorMessage
                                    : ''}</h6>
                            <Login onLogin={this.props.onLogin}/>
                        </ModalBody>
                    </TabPane>
                    <TabPane tabId="2">
                        <ModalHeader toggle={this.props.toggleLoginModal}>
                                Register
                        </ModalHeader>
                        <ModalBody>
                        <h6
                                style={{
                                color: "red"
                            }}>{this.props.successMessage
                                    ? this.props.successMessage
                                    : ''}</h6>
                            <Register onRegister = {this.props.onRegister}/>
                        </ModalBody>
                    </TabPane>

                </TabContent>

            </Modal>
        );
    }


}

export default UserModal;