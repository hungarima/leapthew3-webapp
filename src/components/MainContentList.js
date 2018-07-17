import React, { Component } from 'react';
import UrlViewCard from './UrlViewCard';

class MainContentList extends Component {

    componentWillMount() {
        console.log(this.props.websiteList);
    }
    render() {
        const display = this.props.websiteList
            ? this.props.websiteList.map(website => {
                return <div className="col-4" key={website._id}>
                    <UrlViewCard 

                    />
                </div>
            })
            : '';

        return (
            <div className="main-content-list">
                <div className="row">
                    {display}
                </div>
            </div>
        );
    }
}

export default MainContentList;