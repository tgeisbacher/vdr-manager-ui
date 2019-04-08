import React, { Component } from 'react';
import {parse, format} from 'date-fns'; 
import TVShow from './TVShow';

class EPG extends Component {
    constructor(){
        super()
        this.state = {epgData: []}
    }
    componentDidMount(){
        fetch('http://localhost:34973/api/epg')
        .then(resp => resp.json())
        .then(data => this.setState({epgData:data}))
    }
    render(){
        return (
            <div>
                {Array.isArray(this.state.epgData) ? this.state.epgData
                .map(epgInfo => <TVShow showTitle={epgInfo.ShowName} showSubtitle={epgInfo.Subtitle} />) : <span>error</span>}
            </div>
        )
    }
}


export default EPG;