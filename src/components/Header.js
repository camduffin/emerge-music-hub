import React from 'react';
import NavBar from '../components/NavBar';
import '../../styles/index.scss';


const Header = () => {
    return (
        <header>
            {/* <AniLink fade to="/">
                <h2>
                    <img src={emergeLogo} alt=""/>
                </h2>
            </AniLink> */}
            <NavBar />
        </header>
    )
}
export default Header;