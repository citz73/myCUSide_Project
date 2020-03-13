import React, { Component } from 'react';
import './App.css';
import HomeHeader from './components/home-header.js';
import LoginForm from './components/login-form.js';
import SignupForm from './components/signup-form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeHeader/>
        <br/><br/><br/><br/>
        <button className="button-login-signup" onClick={() => LoginForm}>Login</button>
        <br/><br/><br/>
        <button className="button-login-signup">Signup</button>
      </div>
    );
  }
}

export default App;
