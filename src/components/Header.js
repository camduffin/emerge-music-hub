import React from 'react';
import NavBar from '../components/NavBar';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import '../../styles/index.scss';
import emergeLogo from '../images/emerge-logo.png';

const Header = () => {
    return (
        <header className="wrapper">
            <AniLink fade to="/">
                <h2>
                    <img src={emergeLogo} alt=""/>
                </h2>
            </AniLink>
            <NavBar />
        </header>
    )
}
export default Header;