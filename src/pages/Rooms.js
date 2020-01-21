import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'
import Navbar from '../components/Navbar'
import { Redirect } from 'react-router-dom'
class Rooms extends Component {
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
                <Hero hero="roomsHero">
                    <Banner title="Our Rooms">
                        <Link to="/" className="btn-primary">Return Home</Link>
                    </Banner>
                </Hero>
                <RoomContainer />
            </>
        )
    }
}
export default Rooms
