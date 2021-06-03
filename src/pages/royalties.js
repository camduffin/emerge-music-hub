import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { Parallax } from 'react-parallax';
import { StaticImage } from 'gatsby-plugin-image';
import redBG from '../images/red-bg1.png';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Royalties = () => {

    const andrew = '../images/artists/andrew-karis-two.jpg';
    const camille = '../images/artists/camille.jpeg';

    return (
        <div className="royalties">
            <Layout>
            <SEO />
                <Parallax
                bgImage={redBG}
                strength={500}
                >
                    <section className="royalties-header">
                        <div className="royalties-header-container">
                            <ul className="royalties-image-container">
                                <li onClick={() => scrollTo('#andrew')}>
                                    <StaticImage 
                                    src={andrew}
                                    alt="Photo of Andrew Karis"
                                    width={300}
                                    height={300}
                                    placeholder="blurred"
                                    loading="lazy"
                                    />
                                    <h5>Andrew Karis</h5>
                                </li>
                                <li onClick={() => scrollTo('#camille')}>
                                    <StaticImage 
                                    src={camille}
                                    alt="Photo of Camille Matthews"
                                    width={300}
                                    height={300}
                                    placeholder="blurred"
                                    loading="lazy"
                                />
                                    <h5>Camille Matthews</h5>
                                </li>
                            </ul>
                            <h1>Royalties 101</h1>
                            <h2>Friendly Advice from the pros.</h2>
                        </div>
                    </section>
                </Parallax>
                <Parallax
                bgImage={redBG}
                strength={500}
                >
                <section className="royalty-text">
                    <div className="wrapper royalty-text-container">
                        <h2>Royalties</h2>
                        <p>We put our lives into our work. When our songs and performances are heard on the radio, at a restaurant, in a bar, at a spin cycle class, or a retail store, it adds value to everyone’s experience in those places! Music enhances how we feel and interact in these places. The places that use our music benefit from it –  we may be more likely to order another drink or go back to that spin cycle class because the music motivated you to cycle harder! It’s important that we are fairly compensated for the use of our work. When an artist is paid for the use of their work in this way, it is called a “royalty.” In this module you’ll learn about how you can get paid for the use of your music. You’ll learn about how easy it is to sign up and why it’s important. Royalties could mean the difference between getting a part-time job or being able to focus on cultivating your art.</p>
                        <p>-Ben</p>
                    </div>
                </section>
                <section className="wrapper royalties-videos">
                    <ul className="royalties-video-list">
                        <div className="video-container" data-sal="fade" data-sal-duration="1500">
                            <li className="andrew-karis-video" id="andrew">
                                <h4>Andrew Karis <span>administrator ACTRA RACS</span></h4>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/FZ38LtW5BFc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </li>
                        </div>
                        <div className="video-container" data-sal="fade" data-sal-duration="1500">
                            <li className="camille-matthews-video" id="camille">
                                <h4>Camille Matthews<span>SOCAN</span></h4>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/m3tbGFc8xz0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </li>
                        </div>
                    </ul>  
                </section>
                </Parallax>
            </Layout>
        </div>
    )
}

export default Royalties;