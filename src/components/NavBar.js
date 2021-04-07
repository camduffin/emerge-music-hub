import React, { useState} from 'react';
import '../../styles/index.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import emergeLogo from '../images/emerge-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="nav-bar">
            <AniLink fade to="/">
                <h2>
                    <img src={emergeLogo} alt="Emerge Music Hub logo"/>
                </h2>
            </AniLink>
            <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                <li><AniLink to="/home">Home</AniLink></li> 
                <li><AniLink activeClassName="nav-active" paintDrip to="/musicians" duration={0.7} hex="#FBBEB4">Musicians</AniLink></li>
                <li><AniLink activeClassName="nav-active" paintDrip to="/finance" hex="#F4856F" duration={0.7}>Finance</AniLink></li>
                <li><AniLink activeClassName="nav-active" paintDrip to="/recording" duration={0.7} hex="#94CFE3">Recording</AniLink></li>
                <li><AniLink activeClassName="nav-active" paintDrip to="/exports" duration={0.7} hex="#0A2F58">Exports</AniLink></li>
                <li><AniLink activeClassName="nav-active" paintDrip to="/royalties" duration={0.7}>Royalties</AniLink></li> 
                <li><AniLink activeClassName="nav-active" paintDrip to="/booking" duration={0.7} hex="#F7E9A0">Booking</AniLink></li> 
            </ul>
            <GiHamburgerMenu className="burger" onClick={() => setOpen(!open)}/>
        </nav>
    )
}

export default NavBar;