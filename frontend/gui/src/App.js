import React, { Component } from 'react';
import './App.css';
import HomeHeader from './components/home-header.js';
//import LoginForm from './components/login-form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeHeader />
        </header>
      </div>
    );
  }
}

export default App;
