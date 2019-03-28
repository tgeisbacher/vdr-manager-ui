import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {channels: []}
  }
  componentDidMount() {
    fetch('http://localhost:34973/api/channels')
    .then(resp => resp.json())
    .then(data => {
      console.log({channels:data})
      return data 
    })
    .then(data => this.setState({channels:data}))
  }
  render() {
    return (
        <div>
          <h1>VDR Manager</h1>
          <ul>
            {this.state.channels
                .filter(channel => channel.Name[0] === 'O')
                .map(channel => <li key={channel.Position}>{channel.Name}</li>)}
          </ul>
        </div>
    );
  }
}

export default App;
