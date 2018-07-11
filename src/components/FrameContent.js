import React, { Component } from 'react';
import Iframe from 'react-iframe';
class FrameContent extends Component {

    render() {
        return (
            <div className="">
                <div className="frame" >
                    <Iframe
                        url="http://www.gnoosic.com/"
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