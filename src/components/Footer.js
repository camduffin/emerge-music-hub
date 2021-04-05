import React from 'react';
import '../../styles/index.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-copyright">
                    <p>Emerge Music Hub ©2021</p>
                </div>
                <div className="footer-socials">
                    <nav>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;