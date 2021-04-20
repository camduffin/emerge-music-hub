import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IoIosArrowDropup } from 'react-icons/io';

const Booking = () => {
    return (
        <div className="booking">
            <Layout>
                <IoIosArrowDropup className="scroll-top" onClick={() => scrollTo('#header')} />
                <section className="booking-container">
                    <h2>Putting yourself out there</h2>
                    <ul className="booking-image-container">
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
                        <li onClick={() => scrollTo('#denholm')} >
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
                            src="../images/artists/virginia.jpg" 
                            alt="Photo of Virginia Clark" 
                            placeholder="blurred"
                            loading="lazy"
                            width={275}
                            height={275}
                            />
                            <h5>Virginia Clark</h5>
                        </li>
                    </ul>
                </section>
                <section className="wrapper">
                    <div className="eric-warner-video">
                        <h4 id="eric-warner">Eric Warner - Music Consultant, Promoter, Artist Manager, President We Are Busy Bodies</h4>
                        <iframe
                            data-sal="fade" data-sal-duration="1500"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/_o26HtOgnFY"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 .2em black}</style><a href=https://www.youtube.com/embed/_o26HtOgnFY?autoplay=1><img src=https://img.youtube.com/vi/_o26HtOgnFY/hqdefault.jpg alt=Tame Impala - InnerSpeaker Memories><span>▶</span></a>"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Tame Impala - InnerSpeaker Memories"
                        ></iframe>
                    </div>
                    <div className="denholm-video" id="denholm">
                        <h4>Denholm Whale - Promoter, Artist Manager</h4>
                        <iframe
                            data-sal="fade" data-sal-duration="1500"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/3rs_3fe51GY"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Radiohead - SUE Festival 2018 Chile"
                        ></iframe>
                    </div>
                    <div className="virginia-video">
                        <h4 id="virginia">Virginia Clark - Promoter, Venue Manager, Festival Director</h4>
                        <iframe
                            data-sal="fade" data-sal-duration="1500"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/3rs_3fe51GY"
                            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#0A2F58;opacity:0.9;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3rs_3fe51GY?autoplay=1><img src=https://img.youtube.com/vi/3rs_3fe51GY/hqdefault.jpg alt=Radiohead - SUE Festival 2018 Chile><span>▶</span></a>"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Radiohead - SUE Festival 2018 Chile"
                        ></iframe>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default Booking;