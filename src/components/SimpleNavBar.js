import React, { Component } from 'react';

import {
    Navbar,
    Button
} from 'reactstrap';
import ProfilePanel from './ProfilePanel';

class SimpleNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar className="simple-navbar" dark expand="md">

                    <Button className="home-button">HOME</Button>

                    <ProfilePanel 
                    
                    />
                </Navbar>
            </div>

        );
    }
}

export default SimpleNavbar;