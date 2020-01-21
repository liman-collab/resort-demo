import React, { Component } from 'react';
import { PostData } from '../services/PostData';
import { Redirect } from 'react-router-dom'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {

        if (this.state.username && this.state.password) {
            PostData('login', this.state).then((result) => {
                let responseJSON = result;
                if (responseJSON.userData) {
                    sessionStorage.setItem('userData', responseJSON);
                    this.setState({ redirect: true })
                } else {
                    console.log("Login Error")
                }
            })
        }

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/'} />)
        }
        if (sessionStorage.getItem('userData')) {
            return (<Redirect to={'/'} />)
        }
        return (
            <div className="login-content">
                <h1 className="login-txt">Login</h1>
                <label>Username</label>
                <input type="text" name="username" placeholder="username" onChange={this.onChange} />
                <br />
                <label>Password</label>
                <input type="password" name="password" placeholder="password" onChange={this.onChange} />
                <br />
                <input type="submit" value="Login" className="button" onClick={this.login} />
                <a href="/signup">Registration</a>
            </div>);
    }
}

