import React, { useState} from 'react';
import '../../styles/index.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { RiCloseFill } from 'react-icons/ri';


const NavBar = () => {

    // images
    const emergeLogo = "../images/emerge-logo.png";

    // hamburger state
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <nav className="nav-bar">
            <Link to="/">
                <h2>
                    <StaticImage src={emergeLogo} alt="Emerge Music Hub logo" placeholder="blurred"/>
                </h2>
            </Link>
            <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                <li><RiCloseFill onClick={() => handleClick()} /></li>
                <li><Link activeClassName="nav-active" to="/">Home</Link></li> 
                <li><Link activeClassName="nav-active" to="/musicians">Musicians</Link></li>
                <li><Link activeClassName="nav-active" to="/finance">Finance</Link></li>
                <li><Link activeClassName="nav-active" to="/recording">Recording</Link></li>
                <li><Link activeClassName="nav-active" to="/exports">Exports</Link></li>
                <li><Link activeClassName="nav-active" to="/royalties">Royalties</Link></li> 
                <li><Link activeClassName="nav-active" to="/booking">Booking</Link></li> 
            </ul>
            <div className="burger" onClick={() => handleClick()} style={{transform: open ? "scale(0.6)" : "", opacity: open ? "0.4" : ""}} >
                <div className="menu" aria-label="hidden"></div>
            </div>

            {/* onClick={() => setOpen(!open)} */}
        </nav>
    )
}

export default NavBar;