import React from 'react';
import '../../styles/index.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import emergeLogo from '../images/emerge-logo.png';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <AniLink fade to="/">
                <h2>
                    <img src={emergeLogo} alt=""/>
                </h2>
            </AniLink>
            <ul>
                <li><AniLink to="/home">Home</AniLink></li> 
                <li><AniLink activeClassName="nav-active" to="/musicians">Musicians</AniLink></li>
                <li><AniLink activeClassName="nav-active"to="/finance">Finance</AniLink></li>
                <li><AniLink activeClassName="nav-active" to="/recording">Recording</AniLink></li>
                <li><AniLink activeClassName="nav-active" to="/exports">Exports</AniLink></li>
                <li><AniLink activeClassName="nav-active" to="/royalties">Royalties</AniLink></li> 
                <li><AniLink activeClassName="nav-active" to="/booking">Booking</AniLink></li> 
            </ul>
        </nav>
    )
}

export default NavBar;