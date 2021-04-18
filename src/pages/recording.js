import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Recording = () => {
    return (
    <div className="recording">
        <Layout>
            <div className="wrapper">
                <section className="first-recording-container">
                        <ul className="recording-artist-container">
                            <li>
                                <StaticImage src="../images/artists/jill-zim.jpg" alt="Picture of Jill Zimmermann" placeholder="blurred"/>
                                <h5>Jill Zimmermann</h5>
                            </li>
                            <li>
                            <StaticImage src="../images/artists/erin-costelo.jpg" alt="Picture of Erin Costelo" placeholder="blurred"/>
                                <h5>Erin Costelo</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/josh-korody.jpg" alt="Picture of Josh Korody" placeholder="blurred"/>
                                <h5>Josh Korody</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/chris-stringer.jpg" alt="Picture of Chris Stringer" placeholder="blurred"/>
                                <h5>Chris Stringer</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/aaron-goldstein.jpeg" alt="Picture of Aaron Goldstein" placeholder="blurred"/>
                                <h5>Aaron Goldstein</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/terra-lightfoot.jpg" alt="Picture of Terra Lightfoot" placeholder="blurred"/>
                                <h5>Terra Lightfoot</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/andy-shauf.png" alt="Photo of Andy Shauf" placeholder="blurred"/>
                                <h5>Andy Shauf</h5>
                            </li>
                            <li>
                                <StaticImage src="../images/artists/alysha.jpg" alt="Picture of Alysha Brilla" placeholder="blurred"/>
                                <h5>Alysha Brilla</h5>
                            </li>
                        </ul>
                    <h2>Your First<span>Recording</span></h2>
                </section>
            </div>
        </Layout>
    </div>    
    )
}

export default Recording;