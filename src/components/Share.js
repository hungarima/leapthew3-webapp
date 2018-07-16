import React, {Component} from 'react';
import {
    FacebookShareButton,
    FacebookShareCount,
    FacebookIcon,

    GooglePlusShareButton,
    GooglePlusShareCount,
    GooglePlusIcon,
    TwitterShareButton,
    TwitterIcon
} from 'react-share';

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Share extends Component {

    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Share
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        <FacebookShareButton url={"https://leapthew3-webapp.herokuapp.com/"} quote={""} className="button">
                            <FacebookIcon size={32} round={true}/>
                        </FacebookShareButton>
                        <FacebookShareCount url={""} className="count">
                            {count => count}
                        </FacebookShareCount>
                    </DropdownItem>
                    <DropdownItem>
                        <TwitterShareButton url={""} title={""} className="button">
                            <TwitterIcon size={32} round={true}/>
                        </TwitterShareButton>
                    </DropdownItem>
                    <DropdownItem>
                        <GooglePlusShareButton url={""} className="button">
                            <GooglePlusIcon size={32} round={true}/>
                        </GooglePlusShareButton>

                        <GooglePlusShareCount url={""} className="count">
                            {count => count}
                        </GooglePlusShareCount>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }

}

export default Share;