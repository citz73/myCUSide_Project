import React, { Component } from 'react';
import HomeHeader from './home-header.js';

/*function LoginField() {
    return (
        <React.Fragment>
            <span>CU Email</span>
            <input type="text" />
            <span>Password</span>
            <input type="password" />
            <br/>
        </React.Fragment>
    )
}*/

class LoginForm extends Component {
    store = {
       credentials: {
           cu_email: '',
           password: ''
       } 
    }

    render() {
        return (
            <div className="App">
                <HomeHeader />
                <span>CU Email</span>
                <input type="text" />
                <br/>
                <span>Password</span>
                <input type="password" />
                <br/>
            </div>
        )
    }
}

export default LoginForm;