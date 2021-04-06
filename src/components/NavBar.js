import React, { useState} from 'react';
import '../../styles/index.scss';
import { Link } from 'gatsby';
import emergeLogo from '../images/emerge-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="nav-bar">
            <Link fade to="/">
                <h2>
                    <img src={emergeLogo} alt=""/>
                </h2>
            </Link>
            <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                <li><Link to="/home">Home</Link></li> 
                <li><Link activeClassName="nav-active" to="/musicians">Musicians</Link></li>
                <li><Link activeClassName="nav-active"to="/finance">Finance</Link></li>
                <li><Link activeClassName="nav-active" to="/recording">Recording</Link></li>
                <li><Link activeClassName="nav-active" to="/exports">Exports</Link></li>
                <li><Link activeClassName="nav-active" to="/royalties">Royalties</Link></li> 
                <li><Link activeClassName="nav-active" to="/booking">Booking</Link></li> 
            </ul>
            <GiHamburgerMenu className="burger" onClick={() => setOpen(!open)}/>
        </nav>
    )
}

export default NavBar;