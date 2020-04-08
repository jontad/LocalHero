import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar.js';
import EventItemListView from './components/EventItemListView.js';
import SectionTitle from './components/SectionTitle.js';
import StatusView from './components/StatusView.js';

import data from './data/data.json';

class App extends Component {

  constructor(props){
    super(props); 

    this.state = {
      areaId: 75232,
      activeErrands: 0,
      activeUsers: 0
    }
  }

  componentDidMount(){

    let updatedActiveUsers = data["users"].filter(user => 
      user.areaId === this.state.areaId).length;

    let updatedActiveErrands = data["errands"].filter(errand => 
      errand.areaId === this.state.areaId && errand.status !== "done").length;

    this.setState({ activeErrands: updatedActiveErrands, activeUsers: updatedActiveUsers })

  }

  render(){
    return (
      <div className="App" style={{ fontFamily: 'Inter' }}>
        <NavBar/>
        <StatusView 
          areaId={this.state.areaId} 
          activeUsers={this.state.activeUsers} 
          activeErrands={this.state.activeErrands}
        /> 
        <SectionTitle text="RECENT ACTIVITY"/>
        <EventItemListView errands={data["errands"]}/>
      </div>
    ); 
  }
}

export default App;