import React from 'react';
import '../../styles/index.scss';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF, FaRegPaperPlane } from 'react-icons/fa';
import { IoIosArrowDropup } from 'react-icons/io';
import { ImYoutube2 } from 'react-icons/im';
import scrollTo from 'gatsby-plugin-smoothscroll';


const Footer = () => {

    const instagram = "https://www.instagram.com/emergemusichub/";
    const youtube = "https://www.youtube.com/channel/UC96E1mvcQ82MQmu_auvceGQ";
    const email = "mailto:emergemusichub2021@gmail.com";

    return (
        <footer>
            <div className="footer-container">
                <div className="to-top" data-sal="fade" data-sal-duration="1500">
                    <IoIosArrowDropup  onClick={() => scrollTo('#header')} />
                    <p>back to top</p>
                </div>
                <div className="footer-copyright" data-sal="fade" data-sal-duration="1500">
                    <p>Emerge Music Hub ©2021</p>
                </div>
                <div className="footer-socials">
                    <nav>
                        <ul className="social-container" data-sal="fade" data-sal-duration="1500">
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
                                className="youtube-footer"
                                href={youtube}
                                target="_blank"
                                rel="noreferrer noopener"
                                >
                                    <ImYoutube2/>
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