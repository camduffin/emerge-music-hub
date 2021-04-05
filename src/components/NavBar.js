import React from 'react';
import '../../styles/index.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><AniLink fade to="/" duration={2}>Home</AniLink></li> 
                <li><AniLink activeClassName="nav-active" fade to="/musicians" duration={.8}>Musicians</AniLink></li>
                <li><AniLink activeClassName="nav-active" fade to="/finance" duration={.8}>Finance</AniLink></li>
                <li><AniLink activeClassName="nav-active" fade to="/recording" duration={.8}>First Recording</AniLink></li>
                <li><AniLink activeClassName="nav-active" fade to="/exports" duration={.8}>Exports</AniLink></li>
                <li><AniLink activeClassName="nav-active" fade to="/royalties" duration={.8}>Royalties</AniLink></li> 
                <li><AniLink activeClassName="nav-active" fade to="/booking" duration={.8}>Booking</AniLink></li> 
            </ul>
        </nav>
    )
}

export default NavBar;