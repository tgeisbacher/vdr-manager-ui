import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';   
import Home from './components/Home';
import Channels from './components/Channels';
import Recordings from './components/Recordings';
import EPG from './components/EPG';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/channels" component={Channels} />
            <Route path="/recordings" component={Recordings} />
            <Route path="/epg" component={EPG} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
    
}


export default App;
