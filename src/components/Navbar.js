import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //redirect: false,
            isOpen: false
        }
        this.logout = this.logout.bind(this)
    }

    handleToogle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    logout() {
        sessionStorage.setItem("userData", '');
        sessionStorage.clear();
        this.setState({ redirect: true })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToogle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                        <li>
                            <button className="logout-button" type="button" onClick={this.logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar