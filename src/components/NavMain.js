import React from 'react';
import { Link } from 'gatsby';

const NavMain = () => {
    return (
        <nav data-sal="slide-left" data-sal-duration="1000">
            <ul>
                <li><Link>Education</Link></li>
                <li><Link to="/finance">Finance</Link></li>
                <li><Link>Recording</Link></li>
                <li><Link>Performance</Link></li>
            </ul>
        </nav>
    )
}

export default NavMain;