import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Recording = () => {
    return (
    <div className="recording">
        <Layout>
            <section className="wrapper">
                <section className="first-recording-container">
                        <ul className="recording-artist-container">
                            <li>
                                <StaticImage src="../images/artists/josh-korody.jpg" alt="Picture of Josh Korody" placeholder="blurred"/>
                                <h5>Josh Korody</h5>
                            </li>
                            <li>
                            <StaticImage src="../images/artists/artist2.jpg" alt="Tim Dashney" placeholder="blurred"/>
                                <h5>Tim Dashney</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/artist3.jpg" alt="Tim Dashney" placeholder="blurred"/>
                                <h5>Donald Drumpft</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/artist2.jpg" alt="Tim Dashney" placeholder="blurred"/>
                                <h5>Carley Rae Jepson</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/artist2.jpg" alt="Tim Dashney" placeholder="blurred"/>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/artist2.jpg" alt="Tim Dashney" placeholder="blurred"/>
                            </li>
                        </ul>
                    <h2>Your First<span>Recording</span></h2>
                </section>
            </section>
        </Layout>
    </div>    
    )
}

export default Recording;