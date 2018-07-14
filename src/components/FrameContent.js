import React, { Component } from 'react';
import Iframe from 'react-iframe';
import axios from '../axios';
class FrameContent extends Component {
    
    componentDidMount() {
        // will get called before first time render
        if (this.props.currentUrlId) {
            axios
                .get(`api/url/${this.props.currentUrlId}/data`)
                .then(response => {
                    localStorage.setItem("currentUrlId", this.props.currentUrlId );
                    this.setState({ iframeSrc: response.data.url });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.currentUrlId);
        this.setState({iframeSrc:null})
        // will get called before every time this component re-render
        axios
            .get(`api/url/${nextProps.currentUrlId}/data`)
            .then(response => {
                localStorage.setItem("currentUrlId",this.props.currentUrlId );
                this.setState({ iframeSrc: response.data.url });
            })
            .catch(err => {
                console.log(err);
            })
    }

    state = { iframeSrc: null }


    render() {
        if(!this.state.iframeSrc) return <div><img src="/assets/loading.gif"/></div>
        return (
            <div className="frame" >
                <Iframe
                    url={this.state.iframeSrc}
                    width="100%"
                    height="600px"
                    display="initial"
                    position="relative"
                    frameborder="0"
                    allowFullScreen
                >
                </Iframe>
            </div>
        );
    }
}

export default FrameContent;