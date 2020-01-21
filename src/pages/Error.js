import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Redirect } from 'react-router-dom'
class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }

    }
    componentWillMount() {
        if (sessionStorage.getItem('userData')) {

        } else {
            this.setState({ redirect: true })
        }
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/login'} />)
        }
        return (
            <>
                <Navbar />
                <Hero>
                    <Banner title="404" subtitle="Page not found">
                        <Link to='/' className="btn-primary">Return Home</Link>
                    </Banner>
                </Hero>
            </>
        )
    }
}
export default Error