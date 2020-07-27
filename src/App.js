import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavigationBar from './components/layout/NavigationBar'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
