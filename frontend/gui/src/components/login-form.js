import React, { Component } from 'react';

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
    state = {
        
    }

    render() {
        return (
            <React.Fragment>
                <button className="button-login-signup">Login</button>
            </React.Fragment>
        )
    }
}

export default LoginForm;