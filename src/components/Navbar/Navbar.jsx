import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import SubNavbar from './SubNavbar'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [user, setUser] = useState(true)
    return (
        <React.Fragment>
            <div className="fixed-top" style={{ width: "100vw" }}>
                <div className="navigation">
                    <div className="nav__left__side">
                        <img src={logo} className="logo" />
                        <Link to="/" className="navigation__brand">discovery</Link>
                    </div>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <i className="fas fa-bars" style={{ color: "white" }}></i>
                        </button> class="collapse navbar-collapse" */}
                    {/* <div id="navbarSupportedContent"> */}
                    <ul className="navigation__list__item list-unstyled">
                        <li style={{ flex: 1 }}>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <input type="text" placeholder='Search' />
                        </li>
                        {
                            user === false ? (
                                <li style={{ flex: 1, textAlign: "center" }}>
                                    <Link to="/" onClick={() => setUser(!user)}>Sign In</Link>
                                </li>
                            ) : (
                                <ul className="nav__item__user list-unstyled">
                                    <li>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Lion-1.jpg"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                objectFit: "cover",
                                                borderRadius: "50%"
                                            }} />
                                    </li>
                                    <li>
                                        <i className="fas fa-sign-out-alt" style={{ color: "white" }} onClick={() => setUser(!user)}></i>

                                    </li>
                                </ul>
                            )
                        }
                    </ul>
                    {/* </div> */}
                </div>
            </div>
            <SubNavbar />
        </React.Fragment>
    )
}

export default Navbar