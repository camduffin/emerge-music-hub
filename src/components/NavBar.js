import React from 'react';
import '../../styles/index.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><AniLink fade to="/" duration={2}>Home</AniLink></li> 
                <li><AniLink fade to="/musicians" duration={1}>Musicians</AniLink></li>
                <li><AniLink fade to="/finance" duration={1}>Finance</AniLink></li>
                <li><AniLink fade to="/recording" duration={1}>First Recording</AniLink></li>
                <li><AniLink fade to="/exports" duration={1}>Exports</AniLink></li>
                <li><AniLink fade to="/royalties" duration={1}>Royalties</AniLink></li> 
                <li><AniLink fade to="/booking" duration={1}>Booking</AniLink></li> 
            </ul>
        </nav>
    )
}

export default NavBar;