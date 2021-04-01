import React from 'react';
import { Link } from 'gatsby';

const NavMain = () => {
    return (
        <nav>
            <ul>
                <li><Link>Education</Link></li>
                <li><Link>Finance</Link></li>
                <li><Link>Recording</Link></li>
                <li><Link>Performance</Link></li>
            </ul>
        </nav>
    )
}

export default NavMain;