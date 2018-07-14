import React, { Component } from 'react';
import Iframe from 'react-iframe';
import axios from '../axios';
class FrameContent extends Component {
    state = { iframeSrc: '' }

    componentDidMount() {
        const iframe = document.getElementById("frame");
        console.log(iframe);
        iframe.onload = () => {
            console.log(this.state.iframeSrc);
        }
        // will get called before first time render
        if (this.props.currentUrlId) {
            axios
                .get(`api/url/${this.props.currentUrlId}/data`)
                .then(response => {
                    localStorage.setItem("currentUrlId", this.props.currentUrlId);
                    this.setState({ iframeSrc: response.data.url });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    componentWillReceiveProps(nextProps) {
        // will get called before every time this component re-render
        axios
            .get(`api/url/${nextProps.currentUrlId}/data`)
            .then(response => {
                localStorage.setItem("currentUrlId", this.props.currentUrlId);
                this.setState({ iframeSrc: response.data.url });
            })
            .catch(err => {
                console.log(err);
            })
    }

    renderIframe() {
        // return <Iframe
        //     url={this.state.iframeSrc}
        //     width="100%"
        //     height="600px"
        //     display="initial"
        //     position="relative"
        //     frameborder="0"
        //     allowFullScreen
        //     onbeforeunload={() => { console.log("123") }}
        // >
        // </Iframe>;

        return (
        <div> 
            <object id="frame" onLoad={() => {console.log("load")}} data={this.state.iframeSrc} width="100%" height="600" type="text/html"> </object>
            <div id="loadingMessage">Loading...</div>
        </div>
        
    )
    }

    render() {
        return (
            <div className="frame">
                {this.renderIframe()}
            </div>
        );
    }
}

export default FrameContent;