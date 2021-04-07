import React from 'react';
import '../../styles/index.scss';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF, FaRegPaperPlane } from 'react-icons/fa';
import { IoIosArrowDropup } from 'react-icons/io';
import scrollTo from 'gatsby-plugin-smoothscroll';


const Footer = () => {

    const instagram = "https://www.instagram.com/emergemusichub/";
    const facebook = "https://www.facebook.com/";
    const email = "mailto:camduffin@gmail.com";

    return (
        <footer>
            <div className="footer-container">
                <div className="to-top">
                    <IoIosArrowDropup  onClick={() => scrollTo('#header')} />
                    <p>back to top</p>
                </div>
                <div className="footer-copyright">
                    <p>Emerge Music Hub ©2021</p>
                </div>
                <div className="footer-socials">
                    <nav>
                        <ul className="social-container">
                            <li>
                                <a 
                                href={instagram}
                                target="_blank"
                                rel="noreferrer noopener"
                                >
                                    <FiInstagram/>
                                </a>
                            </li>
                            <li>
                                <a 
                                href={facebook}
                                target="_blank"
                                rel="noreferrer noopener"
                                >
                                    <FaFacebookF/>
                                </a>
                            </li>
                            <li>
                                <a href={email}>
                                    <FaRegPaperPlane/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;