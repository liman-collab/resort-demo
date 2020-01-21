import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'

class Home extends Component {
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
                    <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                        <Link to='/rooms' className="btn-primary">Our rooms</Link>
                    </Banner>
                </Hero>
                <Services />
                <FeaturedRooms />

            </>
        )
    }
}
export default Home