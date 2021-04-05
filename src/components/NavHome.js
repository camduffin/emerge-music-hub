import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavMain = () => {
    return (
        <nav data-sal="slide-left" data-sal-duration="1000">
            <ul>
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

export default NavMain;