import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavHome = () => {
    return (
        <nav data-sal="slide-left" data-sal-duration="1000">
            <ul className="nav-home-flex">
                <li><AniLink swipe direction="down" to="/musicians" duration={1}>Musicians</AniLink></li>
                <li><AniLink paintDrip to="/finance" duration={1} hex="#F4856F">Finance</AniLink></li>
                <li><AniLink fade to="/recording" duration={1}>First Recording</AniLink></li>
                <li><AniLink fade to="/exports" duration={1}>Exports</AniLink></li>
                <li><AniLink fade to="/royalties" duration={1}>Royalties</AniLink></li> 
                <li><AniLink fade to="/booking" duration={3}>Booking</AniLink></li> 
            </ul>
        </nav>
    )
}

export default NavHome;