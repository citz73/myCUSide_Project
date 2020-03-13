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
        credentials: {
            cu_email: '',
            first_name: '',
            last_name: '',
            passw: '',
            confirm_passw: ''
        }
    }

    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    signup = event => {
        console.log(this.state.credentials);
    }

    render() {
        return (
            <div className="App">
                <HomeHeader />
                <br/><br/><br/><br/>
                <span>CU Email</span>
                <input type="text" value={this.state.credentials.cu_email} onChange={this.inputChanged}/>
                <br/>
                <span>First Name</span>
                <input type="text" value={this.state.credentials.first_name} onChange={this.inputChanged}/>
                <br/>
                <span>Last Name</span>
                <input type="text" value={this.state.credentials.last_name} onChange={this.inputChanged}/>
                <br/>
                <span>New Password</span>
                <input type="password" value={this.state.credentials.passw} onChange={this.inputChanged}/>
                <br/>
                <span>Confirm Password</span>
                <input type="password" value={this.state.credentials.confirm_passw} onChange={this.inputChanged}/>
                <br/>
                <button onClick={this.signup}>Sign Up</button>
                <button onClick={() => this.props.history.push('/')}>Cancel</button>
            </div>
        );
    }
}

export default SignupForm;