import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavHome = () => {
    return (
        <nav data-sal="slide-left" data-sal-duration="1000">
            <ul className="nav-home-flex">
                <li><AniLink swipe direction="down" to="/musicians" duration={1.4}>Musicians</AniLink></li>
                <li><AniLink paintDrip to="/finance" duration={1.4} hex="#F4856F">Finance</AniLink></li>
                <li><AniLink paintDrip to="/recording" duration={1.4} hex="#94CFE3">First Recording</AniLink></li>
                <li><AniLink paintDrip to="/exports" duration={1.4} hex="#0A2F58">Exports</AniLink></li>
                <li><AniLink paintDrip to="/royalties" duration={1.4} hex="#FBBEB4">Royalties</AniLink></li> 
                <li><AniLink paintDrip to="/booking" duration={1.4} hex="#F7E9A0">Booking</AniLink></li> 
            </ul>
        </nav>
    )
}

export default NavHome;