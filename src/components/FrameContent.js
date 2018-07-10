import React, { Component } from 'react';
import Iframe from 'react-iframe';
class FrameContent extends Component {

    render() {
        return (
            <div className="">
                <div className="frame" >
                    <Iframe
                        url="https://techkids.vn/"
                        width="100%"
                        height="600px"
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