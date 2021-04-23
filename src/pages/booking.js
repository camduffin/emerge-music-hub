import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IoIosArrowDropup } from 'react-icons/io';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Parallax } from 'react-parallax';
import darkBlue from '../images/darkblue-bg2.png';

const Booking = () => {
    return (
        <div className="booking">
            <Layout>
                <Parallax
                bgImage={darkBlue}
                strength={500}
                >
                <IoIosArrowDropup className="scroll-top" onClick={() => scrollTo('#header')} />
                    <section className="booking-container">
                        <ul className="booking-landing-container">
                            <div className="booking-image-container">
                                <li onClick={() => scrollTo('#eric-warner')}>
                                    <StaticImage 
                                    className="eric-warner" 
                                    src="../images/artists/eric-warner.jpg" 
                                    alt="Picture of Eric Warner" 
                                    placeholder="blurred"
                                    loading="lazy"
                                    width={275}
                                    height={275}
                                    />
                                    <h5>Eric Warner</h5>
                                </li>
                                <li onClick={() => scrollTo('#denholm')}>
                                    <StaticImage 
                                    className="denholm" 
                                    src="../images/artists/denholm.jpg" 
                                    alt="Photo of Denholm Whale" 
                                    placeholder="blurred"
                                    loading="lazy"
                                    width={275}
                                    height={275}
                                    />
                                    <h5>Denholm Whale</h5>
                                </li>
                                <li onClick={() => scrollTo('#virginia')}>
                                    <StaticImage 
                                    className="virginia" 
                                    src="../images/artists/virginia-two.jpg" 
                                    alt="Photo of Virginia Clark" 
                                    placeholder="blurred"
                                    loading="lazy"
                                    width={275}
                                    height={275}
                                    />
                                    <h5>Virginia Clark</h5>
                                </li>
                            </div>
                            <h1>Putting yourself out there</h1>
                            <h2>Friendly advice from the pros.</h2>
                        </ul>
                        <button onClick={() => scrollTo('#booking')}>
                            <IoIosArrowDropdown />
                        </button>
                    </section>
                </Parallax>
                    <section className="booking-text" id="booking">
                        <div className="wrapper">
                            <div className="wrapper booking-text-container">
                                <h2>Putting Yourself Out There</h2>
                                <p data-sal="fade" data-sal-duration="1500">We know it can be hard to get out there and endlessly self promote. And we know that these days everyone is really missing shows. Playing your own shows, going out to one as a fan, running into friends and meeting new people are all really fun parts of being in the music industry. So we want to make sure you have the tools to hit the ground running once shows are back on. As a musician building a career it can be really important to make connections, build your network and engage in the music community. In this module you will hear tips on doing just that, as well as how to navigate booking shows and working with promoters.</p>
                                <p>-Margaret</p>
                            </div>
                        </div>
                        <button onClick={() => scrollTo('#eric-warner')}>
                            <IoIosArrowDropdown />
                        </button>
                    </section>
                <Parallax
                bgImage={darkBlue}
                strength={500}
                >
                    <section className="wrapper">
                        <div className="eric-warner-video">
                            <h4 id="eric-warner">Eric Warner <span>Music Consultant, Promoter, Artist Manager, President We Are Busy Bodies</span></h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/a3VQUmMr6Ak" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="denholm-video" id="denholm">
                            <h4>Denholm Whale <span>Promoter, Artist Manager</span></h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Cy_9iRLNEiE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="virginia-video">
                            <h4 id="virginia">Virginia Clark <span>Promoter, Venue Manager, Festival Director</span></h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/GAt36PbCH_U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </section>
                </Parallax>
            </Layout>
        </div>
    )
}

export default Booking;