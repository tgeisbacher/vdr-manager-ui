import React, { Component } from 'react';
import {parse, format} from 'date-fns'; 
import TVShow from './TVShow';
import APIError from './APIError';
import LoadingSpinner from './LoadingSpinner';

class EPG extends Component {
constructor(){
    super()
    this.state = {epgData: [], apiError: null, isLoaded: false}
}
componentDidMount(){
    fetch('/api/epg')
    .then(resp => resp.json())
    .then(apiResp => (apiResp.Data === null) ? 
        this.setState({apiError:apiResp.Error, isLoaded:true}) : 
        this.setState({epgData:apiResp.Data, isLoaded:true}))
}
render(){
    const {epgData, apiError, isLoaded} = this.state
    return (<div>
                {apiError ? <APIError message={apiError}/> :
                isLoaded ?
                epgData.map(epgInfo => <TVShow showTitle={epgInfo.ShowName} showSubtitle={epgInfo.Subtitle} />) : <LoadingSpinner />}
            </div>)
}
}

export default EPG;