import React from 'react';
import Layout from '../components/Layout';
import { Parallax } from 'react-parallax';
import { StaticImage } from 'gatsby-plugin-image';
import redBG from '../images/red-bg1.png';


const Royalties = () => {

    const andrew = '../images/artists/andrew-karis.jpg';
    const camille = '../images/artists/camille.jpeg';

    return (
        <main className="royalties">
            <Layout>
                <Parallax
                bgImage={redBG}
                strength={500}
                blur={{ min: -15, max: 15 }}
                >
                    <section className="royalties-header">
                        <div className="royalties-header-container">
                            <div className="royalties-image-container">
                                <StaticImage 
                                src={andrew}
                                alt="Photo of Andrew Karis"
                                width={275}
                                height={275}
                                placeholder="blurred"
                                loading="lazy"
                                />
                                <StaticImage 
                                src={camille}
                                alt="Photo of Camille Matthews"
                                width={275}
                                height={275}
                                placeholder="blurred"
                                loading="lazy"
                                />
                            </div>
                            <h1>Royalties 101</h1>
                        </div>
                    </section>
                </Parallax>
                <section className="royalty-text">
                    <div className="wrapper royalty-text-container">
                        <h2>Royalties</h2>
                        <p data-sal="fade" data-sal-duration="1500">We put our lives into our work. When our songs and performances are heard on the radio, at a restaurant, in a bar, at a spin cycle class, or a retail store, it adds value to everyone’s experience in those places! Music enhances how we feel and interact in these places. The places that use our music benefit from it –  we may be more likely to order another drink or go back to that spin cycle class because the music motivated you to cycle harder! It’s important that we are fairly compensated for the use of our work. When an artist is paid for the use of their work in this way, it is called a “royalty.” In this module you’ll learn about how you can get paid for the use of your music. You’ll learn about how easy it is to sign up and why it’s important. Royalties could mean the difference between getting a part-time job or being able to focus on cultivating your art.</p>
                        <p>-Ben</p>
                    </div>
                </section>
                <section className="wrapper">
                    <ul className="royalties-video-list">
                        <li className="andrew-karis-video">
                            <h4>Andrew Karis - administrator ACTRA RACS</h4>
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
                        </li>
                        <li className="camille-matthews-video">
                            <h4>Camille Matthews - SOCAN</h4>
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
                        </li>
                    </ul>  
                </section>
            </Layout>
        </main>
    )
}

export default Royalties;