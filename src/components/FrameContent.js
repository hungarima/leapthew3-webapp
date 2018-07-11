import React, { Component } from 'react';
import Iframe from 'react-iframe';
import axios from '../axios';
class FrameContent extends Component {
    state={iframeSrc: ''}
    componentDidMount() {
        if(this.props.currentUrlId) {
            axios
                .get(`api/url/${this.props.currentUrlId}/data`)
                .then(response => {
                    this.setState({iframeSrc: response.data.url});
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    render() {
        return (
            <div className="">
                <div className="frame" >
                    <Iframe
                        url={this.state.iframeSrc}
                        width="100%"
                        height="700px"
                        display="initial"
                        position="relative"
                        frameborder="0"
                        allowFullScreen
                    >
                    </Iframe>
                </div>
            </div >
        );
    }
}

export default FrameContent;