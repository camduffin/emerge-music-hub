import React, { useState} from 'react';
import '../../styles/index.scss';
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
                <li><Link activeClassName="nav-active" to="/finance">Finances & Grants</Link></li>
                <li><Link activeClassName="nav-active" to="/royalties">Royalties 101</Link></li> 
                <li><Link activeClassName="nav-active" to="/booking">Putting Yourself Out There</Link></li> 
                <li><Link activeClassName="nav-active" to="/recording">Your First Recording</Link></li>
                <li><Link activeClassName="nav-active" to="/musicians">Tips From the Pros</Link></li>
            </ul>
            <div className="burger" onClick={() => handleClick()} style={{opacity: open ? "0" : ""}} >
                <div className="menu" aria-label="hidden"></div>
            </div>

            {/* onClick={() => setOpen(!open)} */}
        </nav>
    )
}

export default NavBar;