import React from 'react';
import NavBar from '../components/NavBar';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import '../../styles/index.scss';

const Header = () => {
    return (
        <header>
            <AniLink fade to="/">
                <h2>Emerge<span>Music</span>Hub</h2>
            </AniLink>
            <NavBar />
        </header>
    )
}
export default Header;