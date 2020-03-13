import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import HomeHeader from './components/home-header.js';
import LoginForm from './components/login-form.js';
import SignupForm from './components/signup-form.js';

class App extends Component {
  handleOnClick(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="App">
        <HomeHeader/>
        <br/><br/><br/><br/>
        <button className="button-login-signup" onClick={() => this.handleOnClick('/login')}>Login</button>
        <br/><br/><br/>
        <button className="button-login-signup" onClick={() => this.handleOnClick('/signup')}>Signup</button>
      </div>
    );
  }
}

export default withRouter(App);
