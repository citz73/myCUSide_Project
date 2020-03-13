import React, { Component } from 'react';
import HomeHeader from './home-header.js';

/*const SignupField {
    return (
        <React.Fragment>
            <span>CU Email</span>
            <input type="text" />
            <span>First Name</span>
            <input type="text" />
            <span>Last Name</span>
            <input type="text" />
            <span>New Password</span>
            <input type="password" />
            <span>Confirm Password</span>
            <input type="password" />
            <br/>
        </React.Fragment>
    );
}*/

class SignupForm extends Component {
    state = {

    }

    render() {
        return (
            <div className="App">
                <HomeHeader />
                <span>CU Email</span>
                <input type="text" />
                <br/>
                <span>First Name</span>
                <input type="text" />
                <br/>
                <span>Last Name</span>
                <input type="text" />
                <br/>
                <span>New Password</span>
                <input type="password" />
                <br/>
                <span>Confirm Password</span>
                <input type="password" />
                <br/>
            </div>
        );
    }
}

export default SignupForm;