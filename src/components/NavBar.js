import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    Nav,
    DropdownMenu,
    DropdownItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    Button,
} from 'reactstrap';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <div className="navbar-flex">
                        <div className="navbar-flex-item">


                            <NavbarBrand className="navbar-brand" href="/">
                                <a href="/">
                                    <img src="/assets/images/upvote.png" alt="upvote" />
                                </a>
                                <Button className="leap-button">LEAP</Button>
                                <a href="/">
                                    <img src="/assets/images/downvote.png" alt="downvote" />
                                </a>
                            </NavbarBrand>

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
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            JOHN DOE
                                    </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                Profile
                                            </DropdownItem>
                                            <DropdownItem>
                                                Sign out
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
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