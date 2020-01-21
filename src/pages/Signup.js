import React, { Component } from 'react';
import { PostData } from '../services/PostData';
import { Redirect } from 'react-router-dom'
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            redirect: false
        }
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    signup() {

        if (this.state.username && this.state.password) {
            PostData('signup', this.state).then((result) => {
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
            <>

                <div className="login-content">
                    <h1 className="login-txt">Signup</h1>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="username" onChange={this.onChange} />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" onChange={this.onChange} />
                    <br />
                    <label>Email</label>
                    <input type="text" name="email" placeholder="email" onChange={this.onChange} />
                    <br />
                    <label>Name</label>
                    <input type="text" name="name" placeholder="name" onChange={this.onChange} />
                    <br />
                    <input type="submit" value="Signup" className="button" onClick={this.signup} />
                    <a href="/login">Login</a>
                </div>
            </>
        );
    }
}

export default Signup;