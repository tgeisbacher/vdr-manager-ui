import React, { Component } from 'react';

class ChannelList extends Component{
    render(){
        const {searchTerm, searchChannel,channels} = this.props
        return(
            <div>
                <h1>Channels</h1>
                <input type="text" onChange={searchChannel.bind(this)}/>
                <ul>
                    {channels
                        .filter(channel => searchTerm ? matchesSearchTerm(channel, searchTerm) : true)
                        .map(channel => <li key={channel.Position}>{channel.Name}</li>)}
                </ul>
            </div>
        )
    }
}
function matchesSearchTerm(channel, searchTerm) {
    return channel.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
}

export default ChannelList