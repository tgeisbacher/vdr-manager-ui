import React, { Component } from 'react';
import ChannelList from './ChannelList';
import APIError from './APIError';
import LoadingSpinner from './LoadingSpinner';

class Channels extends Component {
  constructor(){
    super()
    this.state = {channels: [], apiError: null, searchTerm: null, isLoaded:false}
  }
  componentDidMount() {
    fetch('http://localhost:34973/api/channels')
    .then(resp => resp.json())
    .then(apiResp => (apiResp.Data === null) ? 
        this.setState({apiError:apiResp.Error, isLoaded:true}) : 
        this.setState({channels:apiResp.Data, isLoaded:true})) 
  }
  searchChannel(e) {
    this.setState({searchTerm:e.target.value})
  }
  render() {
    const {searchTerm, channels, apiError, isLoaded} = this.state
    return (<div>
      {apiError ? <APIError message={apiError}/> : 
        isLoaded ? <ChannelList channels={channels} searchChannel={this.searchChannel} searchTerm={searchTerm}/> : <LoadingSpinner />
      }
    </div>)
    
  }
}

export default Channels;
